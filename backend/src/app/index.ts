import path from 'path'
import fs from 'fs-extra'
import { Annotation, DefaultFrame, GameFrame, GameSchema } from '../schema'

export const STORAGE_DIRECTORY = path.resolve(__dirname, '../../../', 'storage')

// Find a json file in the storage directory and parse it
// as json if it exists
export async function findGame(id: string): Promise<GameSchema | null> {
  const file = path.resolve(STORAGE_DIRECTORY, `${id}.json`)

  if (!await gameExists(id)) {
    return null
  }

  const content = fromJson<any>(await fs.readFile(file, 'utf8'))

  const hasCards = (deck: GameFrame) => {
    return deck.UserBoard.length
      || deck.UserHand.length
      || deck.OpponentBoard.length
      || deck.OpponentHand.length
  }

  const frames = content.game.map((e: DefaultFrame) => sortFramePositions(e)).filter((e: GameFrame) => hasCards(e))

  return {
    ...content,
    frameCount: frames.length,
    game: frames,
    annotations: content.annotations
  }
}

function sortFramePositions({ Screen, Rectangles, GameState, recordedAt }: DefaultFrame): GameFrame {
  const frames = Rectangles.filter((e) => ['Unit'].includes(e.staticData?.type))
  const nexus = Rectangles.filter((e) => e.CardCode === 'face')

  const user = nexus.filter((e) => e.LocalPlayer)[0]
  const opponent = nexus.filter((e) => !e.LocalPlayer)[0]

  return {
    Screen,
    OpponentHand: frames.filter(e => e.TopLeftY === 1306),
    OpponentBoard: frames.filter(e => e.TopLeftY === 1053),
    UserBoard: frames.filter(e => e.TopLeftY === 601),
    UserHand: frames.filter(e => e.TopLeftY === 346),
    GameState,
    recordedAt,
    UserHealth: user.currentStats.health,
    OpponentHealth: opponent.currentStats.health
  } as GameFrame
}

// Get some nice type inference when parsing json
export function fromJson<T>(data: string): T {
  const json = JSON.parse(data)

  return json as T
}

// Test if a game exists
export async function gameExists(id: string): Promise<boolean> {
  const file = path.resolve(STORAGE_DIRECTORY, `${id}.json`)

  return await fs.pathExists(file)
}

// Update a game with new data
export async function addAnnotations(id: string, annotation: Annotation): Promise<boolean> {
  if (!await gameExists(id)) {
    return false
  }

  const file = path.resolve(STORAGE_DIRECTORY, `${id}.json`)
  const content = fromJson<GameSchema>(await fs.readFile(file, 'utf8'))
  content.annotations.push(annotation)

  await fs.writeFile(file, JSON.stringify(content))

  return true
}