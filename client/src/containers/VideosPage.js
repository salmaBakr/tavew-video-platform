import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import '../index.css'
import * as actions from '../actions/videos.js'

 class VideosPage extends Component {
  constructor(props){
    super(props)

  }

   handleOnLikeClick(event){
    event.preventDefault()
    const id = event.target.id
    const likes = event.target.value
    const vidInfo = {'id': id, 'likes': likes}
    this.props.actions.increaseLikes(vidInfo)

  }

  componentDidMount(){
    this.props.actions.fetchVideos()
  }

  render() {
    const videos = this.props.videos.map( (video, i) =>
     
        <div key={i} className="thumbVid">
          <Link to={"/videos/" + video.id}>
            <video width="360" height="240" >
              <source src={video.url} type={video.type}/>
            </video>
          </Link>
          <button className='like' id={video.id} value={video.likes} onClick={(event) => this.handleOnLikeClick(event)}>Like</button>
          {video.likes}
          <p className='vidTitle'>{video.title}</p>
         </div>  
      )
               

    return (      
      <div className='wrap'>
        {this.props.children || <div className="vidContainer">{videos} </div> }     
      </div>  
      )
  }
}

function mapStateToProps(state) { 
  return {videos: state.videos }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosPage)