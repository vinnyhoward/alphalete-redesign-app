import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      slideVisibleMens: false,
      slideVisibleWomens: false,
      slideVisibleAccess: false
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
        <div className="Navbar-Container">
      <ul className="left-nav">
        <li
          onMouseOver={ this.openSlideMens } onMouseLeave={ this.closeSlideMens } ><Link to="/mens">MEN'S</Link></li>
        <li onMouseOver={ this.openSlideWomens } onMouseLeave={ this.closeSlideWomens } ><Link to="/womens">WOMEN'S</Link></li>
        <li onMouseOver={ this.openSlideAccess } onMouseLeave={ this.closeSlideAccess } ><Link to="/accessories">ACCESSORIES</Link></li>
        </ul>


       
        <ul className="right-nav">
        <li className="Nav-right"><Link to="/cart">CART</Link></li>
        <li className="Nav-right"><Link to="/login">ACCOUNT</Link></li>
        <li className="Nav-right"><a>SEARCH</a></li>
        </ul>
        
        
      </div>

        <div className={this.state.slideVisibleMens ? 'slide_mens open_mens' : 'not_slide'}></div>
        {/* <div className={this.state.slideNotVisibleMens ? 'slide close_mens' : 'not_slide'}></div> */}
        <div className={this.state.slideVisibleWomens ? 'slide_womens open_womens' : 'not_slide'}></div>
        {/* <div className={this.state.slideNotVisibleWomens ? 'slide' : 'not_slide'}></div> */}
        <div className={this.state.slideVisibleAccess ? 'slide_accessories open_accessories' : 'not_slide'}></div>
        {/* <div className={this.state.slideNotVisibleAccess ? 'slide' : 'not_slide'}></div> */}
      </div>
    )
  }
}

export default Navbar;