import React, { Component } from 'react';
import Friends from './components/Friends';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './components/pages/About';
import Timeline from './components/Timeline';
import Profile from './components/pages/Profile';
import Photos from './components/pages/Photos';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header branding="Social Network" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Timeline} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/friends" component={Friends} />
              <Route exact path="/photos" component={Photos} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
