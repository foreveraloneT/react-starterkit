import {
  GET_REPO_REQUEST,
  GET_REPO_SUCCESS,
  GET_REPO_FAILURE,
  CREATE_MOCK,
} from '../actions/action-types'

const initState = {
  isLoading: false,
  data: [],
  isError: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_REPO_REQUEST:
      return {
        isLoading: true,
        data: [],
        isError: false,
      }

    case GET_REPO_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        isError: false,
      }

    case GET_REPO_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      }

    case CREATE_MOCK: {
      const { data } = state
      const mockItem = {
        id: `mock-${data.length}`,
        full_name: `mock-${data.length}`
      }
      return {
        ...state,
        data: [
          mockItem,
          ...data,
        ]
      }
    }

    default:
      return state
  }
}
