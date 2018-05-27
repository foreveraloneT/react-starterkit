import {
  GET_REPO_REQUEST,
  GET_REPO_SUCCESS,
  CREATE_MOCK,
} from './action-types'

export const getRepoRequest = () => ({
  type: GET_REPO_REQUEST,
})

export const getRepoSuccess = payload => ({
  type: GET_REPO_SUCCESS,
  payload,
})

export const createMock = () => ({
  type: CREATE_MOCK,
})
