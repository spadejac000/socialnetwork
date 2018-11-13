import React, { Component } from 'react';
import ProfileMenu from './ProfileMenu';
import './profile.css';

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <div className="profile-header card card-body pt-0 bg-light rounded-0">
          <div className="profile-picture card card-body"></div>
        </div>
        <ProfileMenu />
      </div>
    )
  }
}

export default ProfileHeader;
