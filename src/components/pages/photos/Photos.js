import React, { Component } from 'react';
import Photo from './Photo';
import {Consumer} from '../../../context';
import axios from 'axios';
import './photos.css';

class Photos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {photos} = value;
          console.log({photos})
          return (
            <div 
              className="container photosLayout"
              // style={{display: 'grid', gridTemplateColumns: '33% 33% 33%'}}
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
