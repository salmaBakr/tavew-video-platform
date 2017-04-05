import React, { Component } from 'react'
import { Link } from 'react-router'
import '../index.css'

export default class UsersPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: []
    }
  }

  componentDidMount(){
    fetch('/api/users/1')
      .then(response =>response.json())
      .then(data => this.setState({
        videos: data.videos
      })
      )
  }

  render() {

    const videos = this.state.videos.map( (video) =>
        
        <div key={video.id} className="vidContainer">
          <h2>{video.title}</h2>
          <video width="360" height="240" controls>
            <source src={video.url} type={video.type}/>
          </video>
          <p>{video.description}</p>
        </div>
  
      )

    return (      
      <div>
      
      
      <Link to="/users/1/videos/new">Upload New Video</Link>
      {this.props.children || videos}
      

      
      </div>
      )
  }
}