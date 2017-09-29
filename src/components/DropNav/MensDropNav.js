import React, { Component } from 'react';
import './MensDropNav.css';
import { Link } from "react-router-dom";

class MensDropNav extends Component {
  render() {
    return (
      <div>
        <div className='open_mens'>
          <ul>
          <Link to="/mens/all"><li>All</li></Link>
          <Link to="/mens/tops"><li>Tops</li></Link>
          <Link to="/mens/premium"><li>Premium</li></Link>
          <Link to="/mens/joggers"><li>Joggers</li></Link>
          <Link to="/mens/shorts"><li>Shorts</li></Link>
          <Link to="/mens/mustgos"><li>Must-Go's</li></Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default MensDropNav;