import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import Products from '../../components/Products/Product'
import ProductSmall from '../Products/ProductSmall'
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
const womansAll = this.props.products.filter(function(products, i) {
  return products.gender === 'FEMALE';
}).splice(0,4)

const womansProd = womansAll.map(( products, i ) => {
    return (
      <Products 
      key={i}
      products={products}
      />
    )
})

console.log(womansProd);

const mensClothing = this.props.products.slice(0, 4).map((products, i) => {
  return (
    <div className='product'>
    <ProductSmall 
    key={i}
    products={products}
    />
    </div>
  )
})


let shoppingNotification = this.props.cart.reduce((sum, cart) => {
  return sum + (cart.qty)
}, 0)

    return ( 
      <div>
      <div className="Navbar">
        <div className="Navbar-extra"></div>
        <div className='nav-wrapper'>

        <div 
          className='mens-nav'
          onMouseOver={ this.openSlideMens }
          >
          <Link 
          to="/mens" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          >MEN'S</Link></div>

           <div 
          className='womans-nav'
          onMouseOver={ this.openSlideWomans } 
          >
          <Link 
          to="/womans" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          >WOMAN'S</Link></div>

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

<div className='dead-space-1' ></div>
<div className='dead-space-2' ></div>
{/* <div className='dead-space-3' ></div> */}
          <div 
          className='logo-main-nav'>
          <Link to="/"><img className='alpha-logo' 
          src='https://s1.postimg.org/85nwfzpg33/Asset_3_3x.png' alt='ALPHA' />
          </Link></div>
{/* <div className='dead-space-4' ></div> */}
<div className='dead-space-5' ></div>
<div className='dead-space-6' ></div>
          <div 
          className='search-nav'>
          <Link 
          to="/search" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          >
          SEARCH
          {/* <svg className="icon-search" viewBox="00 00 70 70" ><path fill="#999" d="M21.839 18.771a10.012 10.012 0 0 0 1.57-5.39c0-5.548-4.493-10.048-10.034-10.048-5.548 0-10.041 4.499-10.041 10.048s4.493 10.048 10.034 10.048c2.012 0 3.886-.594 5.456-1.61l.455-.317 7.165 7.165 2.223-2.263-7.158-7.165.33-.468zM18.995 7.767c1.498 1.498 2.322 3.49 2.322 5.608s-.825 4.11-2.322 5.608c-1.498 1.498-3.49 2.322-5.608 2.322s-4.11-.825-5.608-2.322c-1.498-1.498-2.322-3.49-2.322-5.608s.825-4.11 2.322-5.608c1.498-1.498 3.49-2.322 5.608-2.322s4.11.825 5.608 2.322z"></path></svg> */}
          </Link></div>

          <div className='login-nav' > 
          <a 
          className='auth0' href={'http://localhost:3030/auth' }>
          LOGIN </a>
          </div>
          {/* <a href={'http://localhost:3000/'}><button className='logout buttontheme'> Logout </button></a> */}

          <div className='cart-nav'> 
          <Link 
          to="/cart" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          >CART
          <div className='badge-number'>
            {shoppingNotification}
          </div>
          </Link>
          </div>

        </div>
        </div>
{/* // =====================================================================
// MENU POP UPS
// ===================================================================== */}
        {this.state.slideVisibleMens ? (
        <div className='pop-up'
        onMouseLeave={ this.openSlideMens }
        >
        <div className='pop-up-wrapper'>
        <div className='sub-section'>
        <div className='sub-section-nest'>
        <ul>
        <li className='sidelist-nest-header'>MENS</li>
        <li className='sidelist-nest'>All</li>
        <li className='sidelist-nest'>Tops</li>
        <li className='sidelist-nest'>Leggings</li>
        <li className='sidelist-nest'>Shorts</li>
        </ul>
        </div>
        </div>
        <div className='navbar-product-content'>
        <div className='navbar-product-content-nest'>
        {mensClothing}
        </div>
        </div>
        <div className='n3'></div>
        </div>  
        </div>
        ) :  (<div className='mens-pop-up-close'></div>)}

        {this.state.slideVisibleWomans ? (
        <div className='pop-up'
        onMouseLeave={ this.openSlideWomans }
        >
        <div className='pop-up-wrapper'>
        <div className='sub-section'>
        <div className='sub-section-nest'>
        <ul>
        <li className='sidelist-nest-header'>WOMANS</li>
        <li className='sidelist-nest'>All</li>
        <li className='sidelist-nest'>Tops</li>
        <li className='sidelist-nest'>Leggings</li>
        <li className='sidelist-nest'>Shorts</li>
        </ul>
        </div>
        </div>
        <div className='navbar-product-content'>
        <div className='navbar-product-content-nest'>
        {womansProd}
        </div>
        </div>
        <div className='n3'></div>
        </div>  
        </div>
        ) :  (<div className='mens-pop-up-close'></div>)}
      {/* <div className={this.state.searchAnimate ? 'Search-Box-Transitions Open-Search-Box' : ' '}></div>
      <div className={this.state.slideVisibleMens ? 'slide_mens open_mens' : ' ' }> </div>
      <div className={this.state.slideVisibleWomans ? 'slide_womans open_womans' : ' '}></div>
      <div className={this.state.slideVisibleAccess ? 'slide_accessories open_accessories' : ' '}></div>  */}
      </div>
    )
  }
}


function mapStateToProps(state) { 
  return {
    products: state.products,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Navbar);

