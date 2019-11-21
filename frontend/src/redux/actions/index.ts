import { ReduxRecord } from '../redux'
import { Annotation, GameFrame } from '../../../../backend/src/schema'

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

// Enable/disable autoplay
export type SetPlaying = ReduxRecord & { playing: boolean }
export const setPlaying = (playing: boolean): SetPlaying => ({
  type: 'SET_PLAYING',
  playing
})

export type SetComments = ReduxRecord & { comments: Array<Annotation> }
export const setComments = (comments: Array<Annotation>): SetComments => ({
  type: 'SET_COMMENTS',
  comments
})

export type AddComment = ReduxRecord & { comment: Annotation }
export const addComment = (comment: Annotation): AddComment => ({
  type: 'ADD_COMMENT',
  comment
})