import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../index.css'
import * as actions from '../actions/videos.js'
import { propTypes, defaultProps } from '../props'
import { browserHistory } from 'react-router'


 let timeout = null

 class VideosShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      playing: true
    }
  }

  static contextTypes = {
    router: PropTypes.object
  };
  componentDidMount(){
    const id = this.props.params.videoId
    this.props.actions.fetchVideo(id)
   }
  componentWillUnmount(){
    clearTimeout(timeout);
    this.context.router.go(this.context.router.getCurrentLocation())
  }

  handleMouseMove() {
    this.resetTimer()
    console.log(this.state)
  }
  startTimer() {
     timeout = setTimeout(() => this.goInactive(), 1500)
    }

  goInactive() {
    this.setState({
      active: false
    })
  }

  goActive() {
    this.setState({
      active: true,
    })
    this.startTimer()
  }
  resetTimer() {
    clearTimeout(timeout);
    this.goActive()
  }
  play() {
    const video = document.querySelector('video')
    if(this.state.playing){
      this.setState({
        playing: false
      })
      video.pause()
    }else{
    this.setState({
      playing: true
    })
    video.play()
    }
  }

  back() {
    browserHistory.push('/videos')
  }
  render() { 
    let overlayClass = 'vid-overlay'
    if(!this.state.active){
      overlayClass += ' hidden'
    }
    return (      
  
        <div key={this.props.video.id} className="vidShowContainer" onMouseMove={() => this.handleMouseMove()}>
         
          <div id='wrap-video' >
            <video className="video" autoPlay controls >
              <source src={this.props.video.url} type={this.props.video.type}/>
            </video>
            <div className={overlayClass} >
              <button className='backButton' onClick={() => this.back()}>Back</button>
              <button onClick={() => this.play()}>{this.state.playing ? 'Pause' : 'Play'}</button>
            </div>
          </div>
       
        </div>
  
    )
  }
}

function mapStateToProps(state) {
  return {
    video: state.videos,
  }
}

function mapDispatchToProps(dispatch) {
    console.log('in dispatch state to props')
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps )(VideosShow)