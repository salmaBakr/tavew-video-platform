import React, { Component } from 'react'
import{ Link } from 'react-router'

import '../NavBar.css'

export default (props) => {

    return (
      <div className='navbar'>
        <ul>
          <li><Link to="/Home"> Home </Link></li>
          <li><Link to="/VideosNew"> Upload </Link></li>
        </ul>
      </div>
      )
}

