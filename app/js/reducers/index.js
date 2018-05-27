import { combineReducers } from 'redux'

import error from './error'
import isPing from './ping-pong'
import repo from './repo'

const rootReducer = combineReducers({
  error,
  isPing,
  repo,
})

export default rootReducer
