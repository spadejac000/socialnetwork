import React, { Component } from 'react';
import Friends from './components/Friends';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Social Network</h1>
        <Friends />
      </div>
    );
  }
}

export default App;
