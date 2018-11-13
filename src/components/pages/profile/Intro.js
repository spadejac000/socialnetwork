import React, { Component } from 'react'

class Intro extends Component {
  render() {
    return (
      <div className="">
        <ul className="list-group">
          <li className="list-group-item bg-light">
            <h4 className="text-center">Intro</h4>
          </li>
          <li className="list-group-item"><i className="fas fa-briefcase"></i></li>
          <li className="list-group-item"><i className="fas fa-graduation-cap"></i></li>
          <li className="list-group-item"><i className="fas fa-home"></i></li>
          <li className="list-group-item"><i className="fas fa-map-marker-alt"></i></li>
          <li className="list-group-item"><i className="fas fa-heart"></i></li>
        </ul>
      </div>
    )
  }
}

export default Intro;