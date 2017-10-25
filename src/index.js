import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {createEpicMiddleware} from 'redux-observable'
import storiesReducer from './reducers/storiesReducer'
import usersReducer from './reducers/usersRedicer'
import {rootEpic} from './epics'

const epicMiddleware = createEpicMiddleware(rootEpic)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    storiesState: storiesReducer, 
    usersState: usersReducer
  }), 
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
  , document.getElementById('root'));
registerServiceWorker();
