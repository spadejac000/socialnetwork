import React, { Component } from 'react';
import {Consumer} from '../context';
import AddComment from './AddComment';

class Timeline extends Component {

  render() {
    return (
      <AddComment />
    )
  }
}

export default Timeline;