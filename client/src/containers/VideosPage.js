import React, { Component } from 'react'
import { Link } from 'react-router'
import '../index.css'


export default class VideosPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: []
    }
    this.postVideo.bind(this)
  }

  componentDidMount(){
    this.postVideo()
  }

  postVideo() {
    fetch('/api/videos')
      .then(response =>response.json())
      .then(data => this.setState({
        videos: data
      })
      )
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child,{
        postVideo: this.postVideo.bind(this)
      }))


          const videos = this.state.videos.map( (video) =>

              <div key={video.id} className="thumbVid">
                <Link to={"/videos/" + video.id}>
                  <video width="360" height="240" >
                    <source src={video.url} type={video.type}/>
                  </video>
                </Link>
                <p className='vidTitle'>{video.title}</p>
               </div>  
      )
               

    return (      
      <div className='wrap'>
        {childrenWithProps || <div className="vidContainer"> {videos} </div> }     
      </div>  
      
      )
  }
}