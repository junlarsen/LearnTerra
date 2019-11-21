const path = require('path')
const fs = require('fs-extra')
const globby = require('globby')

const STATIC_DATA_DIRECTORY = path.resolve(__dirname, '../', 'data')

const COLLECTOR_DATA_DIRECTORY = path.resolve(__dirname, '../../', 'collector', '.data')

async function readStaticData() {
    const file = path.resolve(STATIC_DATA_DIRECTORY, 'set1-en_us.json')
    const exists = await fs.pathExists(file)

    if (!exists) {
        throw Error('Could not load set definition')
    }

    const content = await fs.readFile(file, 'utf8')

    return JSON.parse(content)
}

async function processGameFrames(gameId) {
    const gamePath = path.resolve(COLLECTOR_DATA_DIRECTORY, gameId)
    const exists = await fs.pathExists(gamePath)

    if (!exists) {
        throw Error('Could not load game, the specified directory does not exist')
    }

    const statsPath = path.resolve(COLLECTOR_DATA_DIRECTORY, gameId, 'stats', 'stats.json')
    const statsOutput = JSON.parse(await fs.readFile(statsPath, 'utf8'))

    const staticData = await readStaticData()

    const paths = await globby([
        `${gamePath}/*.json`, 
        `!${gamePath}/*_extra.json`,
        `!${gamePath}/output.json`,
    ])
    
    let gameData = {}

    for (const gameFilePath of paths) {
        const content = await fs.readFile(gameFilePath, 'utf8')
        const data = JSON.parse(content)

        const filePathParts = gameFilePath.split('/')
        const recordedAt = parseInt(filePathParts[filePathParts.length - 1].replace('.json', ''))

        data['recordedAt'] = recordedAt

        data['Rectangles'] = data['Rectangles'].map(rect => {
            const cardDefinitions = staticData.filter(cardDef => cardDef['cardCode'] === rect['CardCode'])

            const matchedStatsOutput = statsOutput.filter(
                statEntry => rect['CardCode'] === statEntry['cardCode'] 
                    && recordedAt >= statEntry['observedAt'][0]
                    && recordedAt < statEntry['observedAt'][1]
                    && rect['LocalPlayer'] === statEntry['local']
            )

            if (cardDefinitions.length !== 1) {
                return Object.assign(
                    {},
                    rect,
                    {
                        'staticData': null,
                        'currentStats': rect['CardCode'] === 'face' && matchedStatsOutput.length > 0 ? matchedStatsOutput[0]['stats'] : null,
                    }
                )
            }

            const cardDefinition = cardDefinitions[0]

            let stats = {
                'attack': cardDefinition['attack'],
                'health': cardDefinition['health'],
                'cost': cardDefinition['cost'],
            }

            if (matchedStatsOutput.length === 1) {
                stats = Object.assign({}, stats, matchedStatsOutput[0]['stats'])
            }

            const extraData = {
                'name': cardDefinition['name'],
                'desc': cardDefinition['descriptionRaw'],
                'cost': cardDefinition['cost'],
                'attack': cardDefinition['attack'],
                'health': cardDefinition['health'],
                'img': cardDefinition['assets'][0]['gameAbsolutePath'],
                'type': cardDefinition['type'],
            }

            return Object.assign({}, rect, {'staticData': extraData, 'currentStats': stats})
        })

        await fs.writeFile(path.resolve(gamePath, `${recordedAt}_extra.json`), JSON.stringify(data, null, 4))

        gameData[recordedAt] = data
    }

    const frames = Object.values(gameData)

    await fs.writeFile(path.resolve(gamePath, `output.json`), JSON.stringify(frames, null, 4))

    return frames
}

async function prependFinalData(gameId, content) {
    const data = {
        gameId,
        frameCount: content.length,
        game: content,
        annotations: []
    }

    const outPath = path.resolve(__dirname, '../storage', `${gameId}.json`)
    await fs.writeFile(outPath, JSON.stringify(data))
}

(async () => {
    console.log('Starting')
    const data = await processGameFrames('0bb776bb-e235-4e78-ab6d-d59a4b385506')
    await prependFinalData('0bb776bb-e235-4e78-ab6d-d59a4b385506', data)
    console.log('Done')
})()
