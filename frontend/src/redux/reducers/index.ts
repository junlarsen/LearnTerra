import { combineReducers } from 'redux'
import { ReduxRecord } from '../redux'

const app = (state: any = {}, action: any): ReduxRecord => {
  switch (action.type) {
    case 'SET_GAME':
      return {
        ...state,
        id: action.id
      }

    case 'SET_FRAME_LIMIT':
      return {
        ...state,
        limit: action.limit
      }

    case 'SET_FRAME':
      return {
        ...state,
        frame: action.frame
      }

    case 'SET_FRAMES':
      return {
        ...state,
        frames: action.frames
      }

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing
      }

    case 'SET_COMMENTS':
      return {
        ...state,
        comments: action.comments
      }

    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, action.comment]
      }

    default:
      return state
  }
}

export const reducers = combineReducers({
  app
})