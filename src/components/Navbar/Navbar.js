import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import Mens from '../Mens/Mens'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <ul className="Navbar-Container">
        <div className="Nav-padding">
        <Link to="/mens"><li><a>MEN'S</a></li></Link>
        <Link to="/womens"><li><a>WOMEN'S</a></li></Link>
        <Link to="/accessories"><li><a>ACCESSORIES</a></li></Link>
        {/* <li className="Main-logo"><a>Logo</a></li> */}
        <Link to="/cart"> <li className="Nav-right"><a>CART</a></li></Link>
        <Link to="/login"><li className="Nav-right"><a>ACCOUNT</a></li></Link>
        <li className="Nav-right"><a>SEARCH</a></li>
        </div>
      </ul>
    </div>
    );
  }
}

export default Navbar;