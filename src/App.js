import React, { Component } from 'react';
import Friends from './components/Friends';
import Header from './components/Header';

import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Social Network" />
          <div className="container">
            <Friends /> 
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
