import React, { Component } from 'react'

export default class VideosNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user_id: 1
    }

  }

  handleInputChange(event) {
    const { value, type, name } = event.target
    

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

    fetch('/api/users/1/videos', {
      method: 'POST',
      body: data
    })
      .then(response => response.json)
      .then(data => this.props.router.push('/users/1'))
  }

  render() {
    console.log(this.state)
    return (
      <form className = "form" id="form" onSubmit={(event) => this.handleOnClick(event)}>
        <div className='input-group'>
          <input className='add-video-field'
          type="text" 
          name="title"  
          onChange={(event) => this.handleInputChange(event)}/>
        </div>

        <div className='input-group'>
          <input className='add-video-field'
          type="text" 
          name="description" 
          onChange={(event) => this.handleInputChange(event)}/>
        </div>
                
        <div className='input-group'>
          <input className='add-video-field'
          type="file" 
          name="file" 
          onChange={(event) => this.handleOnAttach(event)}/>
        </div>

        <div className='input-group'>
          <input className='add-video-button'
          type="submit" 
          name="Upload Video" 
          />
        </div>
      </form>
      )
  }
}

    // fetch('/avatars', {
    //   method: 'POST',
    //   body: data
    // })