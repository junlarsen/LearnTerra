import path from 'path'
import fs from 'fs-extra'
import { GameSchema } from '../schema'
import { Request } from 'express'

export const STORAGE_DIRECTORY = path.resolve(__dirname, '../../../', 'storage')

// Find a json file in the storage directory and parse it
// as json if it exists
export async function findGame(id: string): Promise<GameSchema | null> {
  const file = path.resolve(STORAGE_DIRECTORY, `${id}.json`)
  const exists = await fs.pathExists(file)

  if (!exists) {
    return null
  }

  const content = await fs.readFile(file, 'utf8')

  return fromJson<GameSchema>(content)
}

// Get some nice type safety when parsing json
export function fromJson<T>(data: string): T {
  const json = JSON.parse(data)

  return json as T
}
