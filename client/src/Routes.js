import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import VideosPage from './containers/VideosPage'
import VideosNew from './containers/VideosNew'
import VideosShow from './containers/VideosShow'
import Home from './components/Home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/users/:id" component={VideosPage}> 
      <Route path="/users/:id/videos/new" component={VideosNew}/> 
      <Route path="/users/:id/videos/:videoId" component={VideosShow}/> 
    </Route>
  </Route>
  )