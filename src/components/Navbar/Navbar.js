import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      slideVisible: false
    }
this.openSlide = this.openSlide.bind(this)
  }

openSlide() {
  this.setState({
    slideVisible: !this.state.slideVisible
  })
}


  render() {
    return (
      <div className="Navbar">
      <ul className="Navbar-Container">
        <div className="Nav-padding">
        <li><Link to="/mens">MEN'S</Link></li>
        <button
          className='btn'
          onMouseOver={ this.openSlide }
          >MENU</button>
        <li><Link to="/womens">WOMEN'S</Link></li>
        <li><Link to="/accessories">ACCESSORIES</Link></li>
        {/* <li><img className="Main-logo" src='' /></li> */}
        <li className="Nav-right"><Link to="/cart">CART</Link></li>
        <li className="Nav-right"><Link to="/login">ACCOUNT</Link></li>
        <li className="Nav-right"><a>SEARCH</a></li>
        </div>
      </ul>
      <div className={this.state.slideVisible ? 'slide open' : 'slide'}></div>
    </div>
    );
  }
}

export default Navbar;