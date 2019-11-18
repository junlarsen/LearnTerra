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

async function readGameFrames(gameId) {
    const gamePath = path.resolve(COLLECTOR_DATA_DIRECTORY, gameId)
    const exists = await fs.pathExists(gamePath)

    if (!exists) {
        throw Error('Could not load game, the specified directory does not exist')
    }

    const staticData = await readStaticData()

    const paths = await globby([`${gamePath}/*.json`])
    
    let gameData = {}

    for (const gameFilePath of paths) {
        const content = await fs.readFile(gameFilePath, 'utf8')
        const data = JSON.parse(content)

        const filePathParts = gameFilePath.split('/')
        const recordedAt = filePathParts[filePathParts.length - 1].replace('.json', '')

        data['Rectangles'] = data['Rectangles'].map(rect => {
            const cardDefinitions = staticData.filter(cardDef => cardDef['cardCode'] === rect['CardCode'])

            if (cardDefinitions.length !== 1) {
                return Object.assign({}, rect, {'staticData': null})
            }

            const cardDefinition = cardDefinitions[0]

            const extraData = {
                'name': cardDefinition['name'],
                'desc': cardDefinition['descriptionRaw'],
                'cost': cardDefinition['cost'],
                'attack': cardDefinition['attack'],
                'health': cardDefinition['health'],
                'img': cardDefinition['assets'][0]['gameAbsolutePath'],
                'type': cardDefinition['type'],
            }

            return Object.assign({}, rect, {'staticData': extraData})
        })

        await fs.writeFile(path.resolve(gamePath, `${recordedAt}_extra.json`), JSON.stringify(data))

        gameData[recordedAt] = data
    }

    return gameData
}

(async () => {
    console.log('Starting')
    const data = await readGameFrames('15d4fada-449a-4d4b-b97d-967da96bdcb3')
    console.log(data)
    console.log('Done')
})()
