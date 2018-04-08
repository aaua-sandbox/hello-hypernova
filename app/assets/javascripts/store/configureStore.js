import { createStore } from 'redux'
import { counterReducer } from './../reducer/counter'

export function configureStore(preloadState = {}) {
  const initialState = counterReducer(undefined, {})

  return createStore(
    counterReducer,
    Object.assign({}, initialState, preloadState)
  )
}
