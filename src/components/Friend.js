import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../context';


class Friend extends Component {

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: 'DELETE_FRIEND',
      payload: id
    });
  }

  render() {
    const {id, name} = this.props.friend;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card card-body mb-3">
              <h4>{name} 
                <span 
                  style={{cursor: 'pointer', float: 'right', color: 'grey', fontSize: '.5em' }} 
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  Remove
                </span>
              </h4>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Friend.propTypes = {
  friend: PropTypes.object.isRequired,
}

export default Friend;
