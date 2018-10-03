import React, { Component } from 'react';
import Friend from './Friend';

class Friends extends Component {
  state = {
    friends: [
      {
        id: 1,
        name: 'John Doe'
      },
      {
        id: 2,
        name: 'Karen Williams'
      },
      {
        id: 3,
        name: 'Henry Johnson'
      }
    ]
  }

  render() {
    const {friends} = this.state;

    return (
      <div>
        {friends.map(friend => (
          <Friend 
            key={friend.id}
            friend={friend} 
          />
        ))}
      </div>
    )
  }
}

export default Friends;