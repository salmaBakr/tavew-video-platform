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
    if(event.target.className == 'like') {
      this.props.actions.increaseLikes(vidInfo)
    }
    else{
      this.props.actions.decreaseLikes(vidInfo)
    }
  }


  componentDidMount(){
    this.props.actions.fetchVideos()
  }

  render() {
    const videos = this.props.videos.map( (video, i) =>
      
        <div key={i} className="thumbVid">
          <Link to={"/videos/" + video.id}>
            <video width="275" height="154" >
              <source src={video.url} type={video.type}/>
            </video>
          </Link>
           <p className='vidTitle'>{video.title}</p>
          <div>
            <button className='like' id={video.id} value={video.likes} onClick={(event) => this.handleOnLikeClick(event)}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></button>
            <button className='dislike' id={video.id} value={video.likes} onClick={(event) => this.handleOnLikeClick(event)}><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></button>
            {video.likes}
          </div>
          <br/>
         
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