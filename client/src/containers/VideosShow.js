import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../index.css'
import * as actions from '../actions/videos.js'
 let timeout = null

 class VideosShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  componentDidMount(){
    const id = this.props.params.videoId
    this.props.actions.fetchVideo(id)
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

  render() { 
    let overlayClass = 'vid-overlay'
    if(!this.state.active){
      overlayClass += ' hidden'
    }
    return (      
  
        <div key={this.props.video.id} className="vidShowContainer" onMouseMove={() => this.handleMouseMove()}>
         
          <div id='wrap-video' >
            <video className="video" autoPlay >
              <source src={this.props.video.url} type={this.props.video.type}/>
            </video>
            <div className={overlayClass} >
              <button className='backButton'>Back</button>
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