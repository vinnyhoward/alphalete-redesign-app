import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import MensDropNav from '../DropNav/MensDropNav';


class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      slideVisibleMens: false,
      slideVisibleWomens: false,
      slideVisibleAccess: false
    }
this.openSlideMens = this.openSlideMens.bind(this)
this.openSlideWomens = this.openSlideWomens.bind(this)
this.openSlideAccess = this.openSlideAccess.bind(this)
  }


openSlideMens() {
  this.setState({
    slideVisibleMens: !this.state.slideVisibleMens
  })
}

openSlideWomens() {
  this.setState({
    slideVisibleWomens: !this.state.slideVisibleWomens
  })
}

openSlideAccess() {
  this.setState({
    slideVisibleAccess: !this.state.slideVisibleAccess
  })
}

  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Container">
      <ul className="left-nav">
        <li
          onMouseOver={ this.openSlideMens }  ><Link to="/mens">MEN'S</Link></li>
        <li onMouseOver={ this.openSlideWomens }  ><Link to="/womens">WOMEN'S</Link></li>
        <li onMouseOver={ this.openSlideAccess }  ><Link to="/accessories">ACCESSORIES</Link></li>
        </ul>

       
        <ul className="right-nav">
        <li className="Nav-right"><Link to="/cart">CART</Link></li>
        <li className="Nav-right"><Link to="/login">ACCOUNT</Link></li>
        <li className="Nav-right"><a>SEARCH</a></li>
        </ul>
        
        
      </div>

        {/* <div className={this.state.slideVisibleMens ? 'slide_mens open_mens' : ' '}></div>
        <div className={this.state.slideVisibleWomens ? 'slide_womens open_womens' : ' '}></div>
        <div className={this.state.slideVisibleAccess ? 'slide_accessories open_accessories' : ' '}></div> */}
      </div>
    )
  }
}

export default Navbar;