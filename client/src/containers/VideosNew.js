import React, { Component } from 'react'

export default class VideosNew extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  handleInputChange(event) {
    const { value, type, name } = event.target
    console.log(value)
  }
  render() {
    console.log(this.state)
    return (
      <form>
        <div className='input-group'>
          
        </div>

        <div className='input-group'>
          <input type="file" name="vidName" accept="video/*" onChange={(event) => this.handleInputChange(event)}/>
        </div>
      </form>
      )
  }
}
