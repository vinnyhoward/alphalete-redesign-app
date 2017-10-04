import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";



class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      slideVisibleMens: false,
      slideVisibleWomans: false,
      slideVisibleAccess: false,
      searchOpen: false
    }
this.openSlideMens = this.openSlideMens.bind(this)
this.openSlideWomans = this.openSlideWomans.bind(this)
this.openSlideAccess = this.openSlideAccess.bind(this)
this.searchAnimate = this.searchAnimate.bind(this)
  }


searchAnimate() {
  this.setState({
    searchOpen: !this.state.searchOpen
  })
}

openSlideMens() {
  this.setState({
    slideVisibleMens: !this.state.slideVisibleMens
  })
}

openSlideWomans() {
  this.setState({
    slideVisibleWomans: !this.state.slideVisibleWomans
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
      <li ><Link to="/">HOME</Link></li>
        <li onMouseOver={ this.openSlideMens }  ><Link to="/mens">MEN'S</Link></li>
        <li onMouseOver={ this.openSlideWomans }  ><Link to="/womans">WOMEN'S</Link></li>
        <li onMouseOver={ this.openSlideAccess }  ><Link to="/accessories">ACCESSORIES</Link></li>
        </ul>

       
        <ul className="right-nav">
        <li className="Nav-right"><Link to="/cart">CART</Link></li>
        <li className="Nav-right"><Link to="/login">ACCOUNT</Link></li>
        <li onMouseOver={this.searchAnimate} className="Nav-right"><Link to="/search"><form id='Demo'><input className='Open-Search-Box' placeholder='Search' />SEARCH</form></Link></li>
        </ul>
        
        
      </div>
      <div className={this.state.searchAnimate ? 'Search-Box-Transitions Open-Search-Box' : ' '}></div>
      <div className={this.state.slideVisibleMens ? 'slide_mens open_mens' : ' '}></div>
      <div className={this.state.slideVisibleWomans ? 'slide_womans open_womans' : ' '}></div>
      <div className={this.state.slideVisibleAccess ? 'slide_accessories open_accessories' : ' '}></div> 
      </div>
    )
  }
}

export default Navbar;