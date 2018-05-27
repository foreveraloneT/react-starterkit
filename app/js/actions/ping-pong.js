import {
  makeActionCreator,
  PING,
  PONG,
} from './action-types'

export const letPing = makeActionCreator(PING, 'duration')
// export const letPing = duration => ({
//   type: PING,
//   duration,
// })

export const letPong = makeActionCreator(PONG)
