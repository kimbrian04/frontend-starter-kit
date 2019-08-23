import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

let middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const configureStore = initialState =>
  createStore(
    rootReducer,
    initialState, // default state of the application
    applyMiddleware(...middlewares)
  )
export default configureStore
