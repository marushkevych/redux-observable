import {Observable} from 'rxjs'
import {combineEpics} from 'redux-observable'

function loadStoriesEpic(action$) {
  return action$
    .do(action => console.log(action))
    .ignoreElements()
}

export const rootEpic = combineEpics(loadStoriesEpic)
