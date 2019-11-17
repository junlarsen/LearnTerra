import { ReduxRecord } from '../redux'

export type SetGame = ReduxRecord & { id: string }
export const setGame = (id: string): SetGame => ({
  type: 'SET_GAME',
  id
})

export type SetFrameLimit = ReduxRecord & { limit: number }
export const setFrameLimit = (limit: number): SetFrameLimit => ({
  type: 'SET_FRAME_LIMIT',
  limit
})

export type SetFrame = ReduxRecord & { frame: number }
export const setFrame = (frame: number): SetFrame => ({
  type: 'SET_FRAME',
  frame
})