import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
// import { getSearchProducts } from '../../ducks/ProductsDucks'
class Navbar extends Component {
constructor() {
  super()
  this.state = {
    slideVisibleMens: false,
    slideVisibleWomans: false,
    slideVisibleAccess: false,
    searchOpen: false,
    term: '',
  }
// =============================================================================
// BINDS
// =============================================================================
this.openSlideMens = this.openSlideMens.bind(this)
this.openSlideWomans = this.openSlideWomans.bind(this)
this.openSlideAccess = this.openSlideAccess.bind(this)
this.searchAnimate = this.searchAnimate.bind(this)
this.changeHandler = this.changeHandler.bind(this)
this.keyPressHandler = this.keyPressHandler.bind(this)
}
// =============================================================================
// ANIMATION METHODS
// =============================================================================
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
// =============================================================================
// SEARCH METHODS
// =============================================================================
changeHandler(event){
  this.setState({
    term: event.target.value
  })
}
keyPressHandler(event){
  // console.log(event.charCode);
  if(event.charCode === 13){
    //Call action creator from ducks and pass this.state.term
  }
}
  render() {
// =============================================================================
// NOTES - TERNARY OPERATORS FOR POPUP MENUS NEED TO BE FIXED 
// =============================================================================
    return (
      <div className="Navbar">
        <div className='nav-wrapper'>

        <div 
          className='mens-nav'
          onMouseOver={ this.openSlideMens }
          >
          <Link 
          to="/mens" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          >MENS</Link></div>

           <div 
          className='womans-nav'
          onMouseOver={ this.openSlideWomans } 
          >
          <Link 
          to="/womans" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          >WOMANS</Link></div>

          <div 
          className='access-nav'
          onMouseOver={ this.openSlideAccess }
          >
          <Link 
          to="/accessories" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          >ACCESSORIES</Link></div>

          {/* <div className='dog-nav'>
          <img className='alpha-dog-logo' 
          src='https://s1.postimg.org/10zb96hrv3/Asset_2_3x.png' alt='DOG' />
          </div> */}
          
          <div 
          className='logo-main-nav'>
          <Link to="/"><img className='alpha-logo' 
          src='https://s1.postimg.org/7b4sepvavj/Asset_1_3x.png' alt='ALPHA' />
          </Link></div>

          <div 
          className='search-nav'>
          <Link 
          to="/search" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          >SEARCH
          </Link></div>

          <div 
          className='login-nav' 
          href={ process.env.REACT_APP_LOGIN } > 
          LOGIN
          </div>

          <div className='cart-nav'> 
          <Link 
          to="/cart" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          >CART
          </Link>
          </div>
        </div>
      {/* <div className={this.state.searchAnimate ? 'Search-Box-Transitions Open-Search-Box' : ' '}></div>
      <div className={this.state.slideVisibleMens ? 'slide_mens open_mens' : ' ' }> </div>
      <div className={this.state.slideVisibleWomans ? 'slide_womans open_womans' : ' '}></div>
      <div className={this.state.slideVisibleAccess ? 'slide_accessories open_accessories' : ' '}></div>  */}
      </div>
    )
  }
}

export default Navbar;