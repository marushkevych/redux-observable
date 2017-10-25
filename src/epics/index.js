import {Observable} from 'rxjs'
import {combineEpics} from 'redux-observable'
import {LOAD_STORIES, clear} from '../actions'

function loadStoriesEpic(action$) {
  return action$.ofType(LOAD_STORIES)
    .switchMap(() => {
      return Observable.of(clear()).delay(2000)
    })
}

export const rootEpic = combineEpics(loadStoriesEpic)
