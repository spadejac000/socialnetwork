import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_FRIEND':
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload)
      }
    default: 
      return state;
  }
}

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;