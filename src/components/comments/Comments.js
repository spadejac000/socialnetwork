import React, { Component } from 'react';
import Comment from './Comment';
import {Consumer} from '../../context';

class Comments extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          const {comments} = value;
          return (
            <React.Fragment>
              {comments.map(comment => (
                <Comment
                  key={comment.id}
                  comment={comment}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Comments;