import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../../context';


class Photo extends Component {

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: 'DELETE_PHOTO',
      payload: id
    });
  }

  render() {
    const {id, thumbnailUrl} = this.props.photo;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div 
              className="card card-body mb-3" 
              style={{marginLeft: '.5em', marginRight: '.5em'}}
            >
              <img src={thumbnailUrl}></img>
                <span 
                  style={{cursor: 'pointer', float: 'right', color: 'grey', fontSize: '.5em' }} 
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  Remove
                </span>
              
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired,
}

export default Photo;
