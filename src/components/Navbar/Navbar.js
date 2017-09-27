import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      slideVisible: false
    }
this.openSlideMens = this.openSlideMens.bind(this)
this.closeSlideMens = this.closeSlideMens.bind(this)
this.openSlideWomens = this.openSlideWomens.bind(this)
this.closeSlideWomens = this.closeSlideWomens.bind(this)
this.openSlideAccess = this.openSlideAccess.bind(this)
this.closeSlideAccess = this.closeSlideAccess.bind(this)
  }

openSlideMens() {
  this.setState({
    slideVisibleMens: !this.state.slideVisibleMens
  })
}

closeSlideMens() {
  this.setState({
    slideNotVisibleMens: !this.state.slideNotVisibleMens
  })
}

openSlideWomens() {
  this.setState({
    slideVisibleWomens: !this.state.slideVisibleWomens
  })
}

closeSlideWomens() {
  this.setState({
    slideNotVisibleWomens: !this.state.slideNotVisibleWomens
  })
}


openSlideAccess() {
  this.setState({
    slideVisibleAccess: !this.state.slideVisibleAccess
  })
}

closeSlideAccess() {
  this.setState({
    slideNotVisibleAccess: !this.state.slideNotVisibleAccess
  })
}


  render() {
    return (
      <div className="Navbar">
      <ul className="Navbar-Container">
        <div className="Nav-padding">
        <li
          onMouseOver={ this.openSlideMens } onChange={ this.closeSlideMens } ><Link to="/mens">MEN'S</Link></li>
        <li onMouseOver={ this.openSlideWomens } onMouseLeave={ this.closeSlideWomens } ><Link to="/womens">WOMEN'S</Link></li>
        <li onMouseOver={ this.openSlideAccess } onMouseLeave={ this.closeSlideAccess } ><Link to="/accessories">ACCESSORIES</Link></li>
        {/* <li><img className="Main-logo" src='' /></li> */}
        <li className="Nav-right"><Link to="/cart">CART</Link></li>
        <li className="Nav-right"><Link to="/login">ACCOUNT</Link></li>
        <li className="Nav-right"><a>SEARCH</a></li>
        </div>
      </ul>
      <div className={this.state.slideVisibleMens ? 'slide open_mens' : 'not_slide'}></div>
      <div className={this.state.slideNotVisibleMens ? 'slide close_mens' : 'not_slide'}></div>
      <div className={this.state.slideVisibleWomens ? 'slide open_womens' : 'not_slide'}></div>
      <div className={this.state.slideNotVisibleWomens ? 'slide' : 'not_slide'}></div>
      <div className={this.state.slideVisibleAccess ? 'slide open_accessories' : 'not_slide'}></div>
      <div className={this.state.slideNotVisibleAccess ? 'slide' : 'not_slide'}></div>
      
    </div>
    );
  }
}

export default Navbar;