import React, {Component} from 'react';
import {Consumer} from '../../context';
import uuid from 'uuid';

class AddComment extends Component {

  state = {
    comment: '',
    name: ''
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    console.log(this.state)
    const {comment} = this.state;

    const newComment = {
      id: uuid(),
      comment
    }

    dispatch({type: 'ADD_COMMENT', payload: newComment})

  }

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  render() {
    const {comment} = this.state;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3 bg-light">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <textarea 
                  className="form-control form-control-lg mb-3"
                  type="text"
                  placeholder="Add a comment..."
                  name="comment"
                  value={comment}
                  onChange={this.onChange}
                ></textarea>
                <input 
                  type="submit" 
                  className="float-right btn-primary" 
                  value="Post" 
                />
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddComment;