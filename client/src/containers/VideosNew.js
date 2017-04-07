import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/videos.js'

class VideosNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
    
    }

  }
   

  handleInputChange(event) {
    const { value, name } = event.target
    

    const input = document.querySelector('input[type="file"]')

    const data = new FormData()
    data.append('file', input.files[0])

    this.setState({
      [name]: value,
    })
  }

  handleOnAttach(event) {
    
    const input = document.querySelector('input[type="file"]')



    this.setState({
      file: input.files[0],
    })
  }

  handleOnClick(event) {
    event.preventDefault()
    const data = new FormData()
    
    data.append('video[title]', this.state.title)
    data.append('video[description]', this.state.description)
    data.append('video[file]', this.state.file)
    data.append('video[user_id]', this.state.user_id)
    this.props.actions.addVideo(data).then(() => {
      this.props.router.push('/videos')
    })

    // this.props.router.push('/videos')
    // fetch('/api/videos', {
    //   method: 'POST',
    //   body: data
    // })
    //   .then(response => response.json)
    //   .then(data => {
      
    //     this.props.router.push('/videos')
    //   })
  }

  render() {
    console.log(this.state)
    return (
      <div className='form'>
      <form id="form" onSubmit={(event) => this.handleOnClick(event)}>
        <div className='input-group'>
          <input className='add-video-field'
          type="text" 
          name="title"
          placeholder='title'  
          onChange={(event) => this.handleInputChange(event)}/>
        </div>

        <div className='input-group'>
          <input className='add-video-field'
          type="text" 
          name="description"
          placeholder='description' 
          size='70'
          onChange={(event) => this.handleInputChange(event)}/>
        </div>
                
        <div className='input-group'>
          <input className='add-video-field'
          type="file" 
          name="file" 
          accept="video/mp4,video/x-m4v,video/*"
          onChange={(event) => this.handleOnAttach(event)}/>
        </div>

        <div className='input-group'>
          <input className='add-video-button'
          type="submit" 
          name="Upload Video" 
          />
        </div>
      </form>
      </div>
      )
  }
}

function mapDispatchToProps(dispatch) {
    console.log('in dispatch state to props')
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps )(VideosNew)
   