import { combineEpics } from 'redux-observable'

import errorEpic from './error-epic'
import pingPongEpic from './ping-pong-epic'
import repoEpic from './repo-epic'

export default combineEpics(
  errorEpic,
  pingPongEpic,
  repoEpic,
)
