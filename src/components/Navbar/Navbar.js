import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <ul className="Navbar-Container">
        <div className="Nav-padding">
        <li><Link to="/mens">MEN'S</Link></li>
        <li><Link to="/womens">WOMEN'S</Link></li>
        <li><Link to="/accessories">ACCESSORIES</Link></li>
        {/* <li className="Main-logo"><a>Logo</a></li> */}
        <li className="Nav-right"><Link to="/cart">CART</Link></li>
        <li className="Nav-right"><Link to="/login">ACCOUNT</Link></li>
        <li className="Nav-right"><a>SEARCH</a></li>
        </div>
      </ul>
    </div>
    );
  }
}

export default Navbar;