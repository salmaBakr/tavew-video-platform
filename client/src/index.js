import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router' 
import { Provider } from 'react-redux'; 
import Routes from './Routes.js'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import './index.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes}/>
    </Provider>,
  document.getElementById('root')
);
