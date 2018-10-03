import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Friend extends Component {
  render() {
    const {name} = this.props.friend;
    return (
      <div className="card card-body mb-3">
        <h4>{name} <span>Remove</span></h4>
      </div>
    )
  }
}

Friend.propTypes = {
  friend: PropTypes.object.isRequired
}

export default Friend;
