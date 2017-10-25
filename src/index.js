import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {createEpicMiddleware} from 'redux-observable'
import reducer from './reducers'
import {rootEpic} from './epics'

const epicMiddleware = createEpicMiddleware(rootEpic)
const store = createStore(reducer, applyMiddleware(epicMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
  , document.getElementById('root'));
registerServiceWorker();
