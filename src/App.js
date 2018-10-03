import React, { Component } from 'react';
import Friends from './components/Friends';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Social Network" />
        <div className="container">
          <Friends />
        </div>
      </div>
    );
  }
}

export default App;
