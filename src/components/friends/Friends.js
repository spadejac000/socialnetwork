import React, { Component } from 'react';
import Friend from './Friend';
import {Consumer} from '../../context';

class Friends extends Component {

  // onDeleteClick() {
  //   axios.delete()

  //   dispatch({type: 'DELETE_FRIEND', payload: id});
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const {friends} = value;
          return (
            <div 
              className="container" 
              style={{display: 'grid', gridTemplateColumns:"50% 50%"}}
            >
              <React.Fragment>
                {friends.map(friend => (
                  <Friend 
                    key={friend.id}
                    friend={friend}
                  />
                ))}
              </React.Fragment>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Friends;