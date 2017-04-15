import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../index.css'
import * as actions from '../actions/videos.js'

 class VideosShow extends Component {

  componentDidMount(){
    const id = this.props.params.videoId
    this.props.actions.fetchVideo(id)
   }

  render() { 
    return (      
  
        <div key={this.props.video.id} className="vidShowContainer">
          <h2>{this.props.video.title}</h2>
          <div id='wrap-video'>
            <video className="video"  controls autoPlay >
              <source src={this.props.video.url} type={this.props.video.type}/>

            </video>
          </div>
          <p>{this.props.video.description}</p>
        </div>
  
    )
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  return {video: state.videos}
}

function mapDispatchToProps(dispatch) {
    console.log('in dispatch state to props')
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps )(VideosShow)