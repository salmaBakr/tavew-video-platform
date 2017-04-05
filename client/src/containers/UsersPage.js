import React, { Component } from 'react'

export default class UsersPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: []
    }
  }

  componentDidMount(){
    fetch('/api/users/1/')
      .then(response =>response.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>UsersPage is Coming</div>
      )
  }
}