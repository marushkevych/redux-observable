import {Observable} from 'rxjs'
import {combineEpics} from 'redux-observable'
import {LOAD_STORIES, clear} from '../actions/storiesActions'
import {FETCH_USER, fetchUserFulfilledAction} from '../actions/usersActions'

function loadStoriesEpic(action$) {
  return action$.ofType(LOAD_STORIES)
    .switchMap(() => {
      return Observable.of(clear()).delay(2000)
    })
}

function fetchUserEpic(action$) {
  return action$.ofType(FETCH_USER)
    .switchMap(({payload}) => {
      return Observable.ajax.getJSON(`https://api.github.com/users/${payload}`)
        .map(user => fetchUserFulfilledAction(user))
    })
}

export const rootEpic = combineEpics(loadStoriesEpic, fetchUserEpic)
