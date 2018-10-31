import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_COMMENT':
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload)
      }
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [action.payload, ...state.comments]
      }
    case 'DELETE_FRIEND':
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload)
      }
    case 'ADD_FRIEND':
      return {
        ...state,
        friends: [action.payload, ...state.friends]
      }
    case 'DELETE_PHOTO':
      return {
        ...state,
        photos: state.photos.filter(photo => photo.id !== action.payload)
      }
    case 'ADD_PHOTO':
      return {
        ...state,
        photos: [action.payload, ...state.photos]
      }
    default: 
      return state;
  }
}

export class Provider extends Component {
  state = {
    friends: [],
    comments: [],
    photos: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  componentDidMount() {

    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('http://jsonplaceholder.typicode.com/photos?albumId=1')
    ])
      .then(res => {
        this.setState({friends: res[0].data, comments: res[1].data.slice(0, 2), photos: res[2].data.slice(0, 14)})
      })
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