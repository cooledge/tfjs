import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import speechReducer from '../reducers/speechReducer'

const store = createStore(
  combineReducers({
    speech: speechReducer
  }),
  applyMiddleware(
    thunk
  )
)

export default store

