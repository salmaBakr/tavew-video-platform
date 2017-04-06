import React, { Component } from 'react'
import { Link } from 'react-router'
import '../index.css'

export default class UsersPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: []
    }
    this.fetchVideos.bind(this)
  }

  componentDidMount(){
    this.fetchVideos()
  }

  fetchVideos() {
    fetch('/api/users/1')
      .then(response =>response.json())
      .then(data => this.setState({
        videos: data.videos
      })
      )
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child,{
        fetchVideos: this.fetchVideos
      }))

    const videos = this.state.videos.map( (video) =>
        
        <div key={video.id} className="vidContainer">
          <h2>{video.title}</h2>
          <Link to="/users/1/videos/2">
            <video width="360" height="240" className="thumbVid">
              <source src={video.url} type={video.type}/>
            </video>
          </Link>
        </div>
  
      )

    return (      
      <div>
      
      
      <Link to="/users/1/videos/new">Upload New Video</Link>
      {childrenWithProps || videos}
      

      
      </div>
      )
  }
}