import React, {Component} from 'react';

class AddComment extends Component {
  render() {
    return (
      <div className="card card-body mb-3">
        <textarea className="mb-1"></textarea>
        <button type="button" className="float-right btn-primary" value="Post">Post</button>
      </div>
    )
  }
}

export default AddComment;