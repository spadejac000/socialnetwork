import React from 'react';
import ProfileHeader from './ProfileHeader';
import Intro from './Intro';
import Post from './Post';

export default () => {
  return (
    <div>
      <ProfileHeader />
      <div className="container">
        <div className="row">
          <div className="col-sm-4 pl-0 pr-4">
            <Intro />
          </div>
          <div className="col-sm-8 pr-0 pl-4">
            <Post />
          </div>
        </div>
      </div>
      
      {/* 
      <Timeline /> */}
    </div>
  )
}