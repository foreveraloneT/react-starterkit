// import { Observable } from 'rxjs'
import {
  GET_REPO_REQUEST
} from '../actions/action-types'
import * as repoAction from '../actions/repo'

export default (action$, store, { callStaticAPI }) =>
  action$.ofType(GET_REPO_REQUEST)
    .mergeMap(action =>
      callStaticAPI({
        url: 'https://api.github.com/users/foreveraloneT/repos',
        method: 'GET',
      })
      .map(result => repoAction.getRepoSuccess(result.response))
    )

// redux-thunk
// rxjs
// redux-observable
