import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = props => {
  const {branding} = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/profile" className="nav-link">User</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Timeline</Link>
            </li>
            <li className="nav-item">
              <Link to="/friends" className="nav-link">Friends</Link>
            </li>
            <li className="nav-item">
              <Link to="/photos" className="nav-link">Photos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Header.defaultProps = {
  branding: 'My App'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header;
