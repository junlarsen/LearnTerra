import { ReduxRecord } from '../redux'
import { GameFrame } from '../../../../backend/src/schema'

// Set the game id
export type SetGame = ReduxRecord & { id: string }
export const setGame = (id: string): SetGame => ({
  type: 'SET_GAME',
  id
})

// Set the max frames for the game
export type SetFrameLimit = ReduxRecord & { limit: number }
export const setFrameLimit = (limit: number): SetFrameLimit => ({
  type: 'SET_FRAME_LIMIT',
  limit
})

// Set the frame number we're currently on
export type SetFrame = ReduxRecord & { frame: number }
export const setFrame = (frame: number): SetFrame => ({
  type: 'SET_FRAME',
  frame
})

// Set the frames for the current game
export type SetFrames = ReduxRecord & { frames: Array<GameFrame> }
export const setFrames = (frames: Array<GameFrame>): SetFrames => ({
  type: 'SET_FRAMES',
  frames
})

export type SetPlaying = ReduxRecord & { playing: boolean }
export const setPlaying = (playing: boolean): SetPlaying => ({
  type: 'SET_PLAYING',
  playing
})