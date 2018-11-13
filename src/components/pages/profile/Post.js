import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div className="">
        <nav className="profileMenuNavbar postMenuNavbar bg-light card-header p-0">
          <ul className="pl-0">
            <li><a className="text-primary" href="#">Status</a></li>
            <li><a className="text-primary" href="#">Photo</a></li>
            <li><a className="text-primary" href="#">Place</a></li>
            <li><a className="text-primary" href="#">Life Event</a></li>
          </ul>
        </nav>
          <form>
            <textarea className="post form-control form-control-lg rounded-0 border-top-0" placeholder="What's on your mind?">
            </textarea>
          </form>
      </div>
    )
  }
}

export default Post;