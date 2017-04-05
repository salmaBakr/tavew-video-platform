import React, { Component } from 'react'

export default class UsersPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: []
    }
  }

  componentDidMount(){
    fetch('/api/users/1/')
      .then(response =>response.json())
      .then(data => this.setState({
        videos: data.videos
      })
      )
  }

  render() {

    const videos = this.state.videos.map( (video) =>
        
        <div key={video.id}>
          <h1>{video.title}</h1>
          <video width="320" height="240" controls>
            <source src={video.url} type={video.type}/>
          </video>
          <p>{video.description}</p>
        </div>
  
      )

    return (
      <div>{videos}</div>
      )
  }
}