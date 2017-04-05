import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import UsersPage from './containers/UsersPage'
import Home from './components/Home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/users/:id" component={UsersPage}/> 
  </Route>
  )