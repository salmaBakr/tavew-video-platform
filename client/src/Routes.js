import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import UsersPage from './containers/UsersPage'
import VideosNew from './containers/VideosNew'
import VideosShow from './containers/VideosShow'
import Home from './components/Home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/users/:id" component={UsersPage}> 
      <Route path="/users/:id/videos/new" component={VideosNew}/> 
      <Route path="/users/:id/videos/:videoId" component={VideosShow}/> 
    </Route>
  </Route>
  )