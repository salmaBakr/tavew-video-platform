import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router' 
import store from './configureStore';
import { Provider } from 'react-redux'; 
import Routes from './Routes.js'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory} routes={Routes}/>,
  document.getElementById('root')
);
