import React, { Component } from 'react';
import NavBar from './NavBar';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </NavBar>
      </div>
    );
  }
}

export default App;



