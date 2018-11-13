import React, { Component } from 'react';
import './profile.css';

class ProfileMenu extends Component {
  render() {
    return (
      <div className="">
        <nav className="profileMenuNavbar border-top-0 rounded-bottom mb-5 bg-light">
          <ul>
            <li><a className="text-primary" href="#">Timeline</a></li>
            <li><a className="text-primary" href="#">About</a></li>
            <li><a className="text-primary" href="#">Friends</a></li>
            <li><a className="text-primary" href="#">Photos</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default  ProfileMenu;
