import React, { Component } from 'react';
import {Consumer} from '../context';
import AddComment from './comments/AddComment';
import Comments from './comments/Comments';

class Timeline extends Component {

  render() {
    return (
      <div>
        <AddComment />
        <Comments />
      </div>
    )
  }
}

export default Timeline;