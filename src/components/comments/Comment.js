import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';

class Comment extends Component {

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: 'DELETE_COMMENT',
      payload: id
    });
  }

  render() {
    const {body, name} = this.props.comment;
    return(
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name}
                <span 
                  style={{cursor: 'pointer', float: 'right', color: 'grey', fontSize: '.5em' }} 
                  onClick={this.onDeleteClick.bind(this, dispatch)}
                >
                  Remove
                </span>
              </h4>
              <p>{body}</p>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Comment;