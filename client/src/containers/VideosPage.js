import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import '../index.css'
import * as actions from '../actions/videos.js'

 class VideosPage extends Component {


  componentDidMount(){
    this.props.actions.fetchVideos()
  }

  render() {
    const videos = this.props.videos.map( (video) =>

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
        {this.props.children || <div className="vidContainer">{videos} </div> }     
      </div>  
      )
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  return {videos: state.videos}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosPage)