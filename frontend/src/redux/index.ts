import { createStore, applyMiddleware } from 'redux'
import { reducers } from './reducers'
import { navigation } from './middleware'

export const store = createStore(
  reducers,
  applyMiddleware(
    navigation()
  )
)