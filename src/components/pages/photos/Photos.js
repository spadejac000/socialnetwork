import React, { Component } from 'react';
import Photo from './Photo';
import {Consumer} from '../../../context';
import axios from 'axios';

class Photos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {photos} = value;
          console.log({photos})
          return (
            <div 
              className="container" 
              style={{display: 'grid', gridTemplateColumns:"50% 50%"}}
            >
              <React.Fragment>
                {photos.map(photo => (
                  <Photo 
                    key={photo.id}
                    photo={photo}
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

export default Photos;
