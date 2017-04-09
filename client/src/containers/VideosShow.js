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
      <div>
        <div key={this.props.video.id} className="vidShowContainer">
          <div>
            <h2>{this.props.video.title}</h2>
            <video className="video" width="720" height="480" controls autoPlay >
              <source src={this.props.video.url} type={this.props.video.type}/>
            </video>
            <p>{this.props.video.description}</p>
          </div>
        </div>
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