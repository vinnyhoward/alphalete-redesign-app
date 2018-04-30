import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import ProductSmall from '../Products/ProductSmall'
import{ removeFromCart, singleProductView } from '../../ducks/ProductsDucks'
// import Products from '../../components/Products/Product'
// import { getSearchProducts } from '../../ducks/ProductsDucks'
class Navbar extends Component {
constructor() {
  super()
  this.state = {
    slideVisibleMens: false,
    slideVisibleWomans: false,
    slideVisibleAccess: false,
    slideVisibleCart: false,
    searchOpen: false,
    term: ''
  }
// =============================================================================
// BINDS
// =============================================================================
this.cartAnimate = this.cartAnimate.bind(this)
this.openSlideMens = this.openSlideMens.bind(this)
this.openSlideWomans = this.openSlideWomans.bind(this)
this.openSlideAccess = this.openSlideAccess.bind(this)
// this.searchAnimate = this.searchAnimate.bind(this)
// this.changeHandler = this.changeHandler.bind(this)
// this.keyPressHandler = this.keyPressHandler.bind(this)
}
// =============================================================================
// ANIMATION METHODS
// =============================================================================
 
cartAnimate() {
  this.setState({
    slideVisibleCart: !this.state.slideVisibleCart
  })
}
// openSlideMens() {
//   this.setState({
//     slideVisibleMens: !this.state.slideVisibleMens
//   })
// }
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
    <div className='product' key={i}>
    <ProductSmall 
    key={i}
    products={products}
    />
    </div>
  )
})

const accessAll = this.props.products.filter(function(products, i) {
  return products.category === 'accessories';
}).splice(0,4)

const accessProd = accessAll.map(( products, i ) => {
  return (
    <div className='product' key={i}>
    <ProductSmall 
    key={i}
    products={products}
    />
    </div>
  )
})

const mensClothing = this.props.products.slice(0, 4).map((products, i) => {
  return (
    <div className='product' key={i}>
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
          >
          <Link 
          to="/mens" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          ><div onMouseOver={ this.openSlideMens } >MEN'S</div></Link></div>

           <div 
          className='womans-nav'
          >
          <Link 
          to="/womans" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          ><div onMouseOver={ this.openSlideWomans } >WOMAN'S</div></Link></div>

          <div 
          className='access-nav'
          >
          <Link 
          to="/accessories" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          ><div onMouseOver={ this.openSlideAccess } >ACCESSORIES</div></Link></div>

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
          src='https://image.ibb.co/gFo91x/white_Asset_2_3x.png' alt='ALPHA' />
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
          className='auth0' href={`/auth`}>
          LOGIN </a>
          </div>
          {/* <a href={'http://localhost:3000/'}><button className='logout buttontheme'> Logout </button></a> */}

          <div className='cart-nav'> 
          <Link 
          to="/cart" 
          className={'font-color'}
          style={{ textDecoration: 'none' }}
          onClick={ this.cartAnimate }
          >CART

        {shoppingNotification >= 1 ? (
          <div className='badge-number'>
            {shoppingNotification}
          </div>
          ) : (<div></div>)}
          </Link>
          </div>
        </div>
        </div>
{/* // =====================================================================
// MENU POP UPS
// ===================================================================== */}
      
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

        {this.state.slideVisibleAccess ? (
        <div className='pop-up'
        onMouseLeave={ this.openSlideAccess }
        >
        <div className='pop-up-wrapper'>
        <div className='sub-section'>
        <div className='sub-section-nest'>
        <ul>
        <li className='sidelist-nest-header'>ACCESSORIES</li>
        <li className='sidelist-nest'>All</li>
        <li className='sidelist-nest'>Tops</li>
        <li className='sidelist-nest'>Leggings</li>
        <li className='sidelist-nest'>Shorts</li>
        </ul>
        </div>
        </div>
        <div className='navbar-product-content'>
        <div className='navbar-product-content-nest'>
        { accessProd }
        </div>
        </div>
        <div className='n3'></div>
        </div>  
        </div>
        ) :  (<div className='mens-pop-up-close'></div>)}

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


{/* // =====================================================================
// CART POP UPS
// ===================================================================== */}

{/* this.state.slideVisibleCart ? (
  <div className='cart-pop-up'
  onMouseLeave={this.cartAnimateLeave}>
  <div className='cart-side-menu-wrapper'>
    <div className='side-cart-header'>1</div>
    <div className='side-product-cart'>2</div>
    <div className='side-total-cart'>3</div>
    <div className='side-checkout-cart'>
    <Link 
        to="/cart" 
        className={'font-color'}
        style={{ textDecoration: 'none' }}
        >
        <button className='side-cart-button'>VIEW CHECKOUT</button>
        </Link>
    </div>
  </div>
  </div>) :  (<div className='pop-up-close'></div>)} */}

      </div>
    )
  }
}


function mapStateToProps(state) { 
  return {
    products: state.products,
    cart: state.cart,
    singleProduct: state.singleProduct
  }
}

export default connect(mapStateToProps, { removeFromCart, singleProductView  })(Navbar);

