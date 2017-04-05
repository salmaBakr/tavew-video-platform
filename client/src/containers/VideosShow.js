import React, { Component } from 'react'
import { Link } from 'react-router'
import '../index.css'

export default class VideosShow extends Component {
  constructor(props){
    super(props)

    this.state = {
      video: []
    }
  }

  componentDidMount(){
    fetch('/api/users/1/videos/2')
      .then(response =>response.json())
      .then(data => this.setState({
        video: data
      }))
  }

  render() {


    
    return (      
      <div>
      
        <div key={this.state.video.id} className="vidShowContainer">
          <div>
            <h2>{this.state.video.title}</h2>
            <video className="video" width="720" height="480" controls autoPlay >
              <source src={this.state.video.url} type={this.state.video.type}/>
            </video>
            <p>{this.state.video.description}</p>
          </div>
        </div>
  
      

      
      </div>
      )
  }
}