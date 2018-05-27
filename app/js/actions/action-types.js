const getCallAPIAction = action => ({
  REQUEST: `${action}_REQUEST`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
})

export const makeActionCreator = (type, ...argNames) => (...args) => {
  let action = { type }
  argNames.forEach((arg, index) => {
    action[arg] = args[index]
  })
  return action
}

export const PING = 'PING'
export const PONG = 'PONG'

export const GET_REPO_REQUEST = 'GET_REPO_REQUEST'
export const GET_REPO_SUCCESS = 'GET_REPO_SUCCESS'
export const GET_REPO_FAILURE = 'GET_REPO_FAILURE'
export const CREATE_MOCK = 'CREATE_MOCK'
