import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ removeFromCart } from '../../ducks/ProductsDucks'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Link } from "react-router-dom";

class Cart extends Component {
constructor() {
  super()
  this.state = {
    singleProduct: {}
  }
  this.onToken=this.onToken.bind(this);
}
// =============================================================================
// STRIPE METHOD
// =============================================================================
onToken(token) {
  token.card = void 0;
  console.log('token', this.state);
  axios.post('/api/payment', { token, amount: 0.0000, options: this.state} ).then(response => {
    alert('we are in business')
  });
}
// =============================================================================
// LIFE CYCLE METHODS
// =============================================================================
componentDidMount() {
  axios.get(`/api/getproduct/${this.props.match.params.id}`).then( res => {
    this.setState({
      singleProduct: res.data
    })
  })
}

render() {
// =============================================================================
// JAVASCRIPT
// =============================================================================
let shoppingNotification = this.props.cart.reduce((sum, cart) => {
  return sum + (cart.qty)
}, 0)

let allTotal = this.props.cart.reduce((sum, cart) => {
  return sum +  (cart.price * cart.qty)
},0)

let shoppingCartDisplay = this.props.cart.map((product, i ) => {
return (
<div key={i}>
    <div className='product-cart-container'>
<Link className='garbage' to={`/products/${product.productid}`}>
    <img className='shopping-image' src={product.image1} alt="hey"/>
</Link>
    <div className='product-cart-title'>{product.title}
    <div className='line'></div> 
    </div> 
    <div className='product-cart-qty'> QTY: {product.qty}</div>
    <div className='product-cart-sub'>${product.price * product.qty}</div>
    <div onClick={ () => {this.props.removeFromCart(product.productid)}} >
    <button className='remove'>REMOVE</button>
    </div>
    </div>
</div>
  )
})
// =============================================================================
// BODY
// =============================================================================
  return (
// =============================================================================
// TERNARY FUNCTION BELOW
// =============================================================================
<div> {shoppingNotification >= 1 ? (
    <div className='cart-body-margin'>
    <div className='checkout-container'>
    <div className='cart-header'>SHOPPING CART</div>
    <div className='cart-content'>
    <div className={'product-info-cart'}>

    {shoppingCartDisplay}

    </div>
    </div>
    <div className='cart-checkout'>
    <div className='special-seller'>SPECIAL INSTRUCTIONS FOR SELLER</div>
    <textarea className='input-checkout' type="text"/>
    <div className='checkout-box'>
    <div className='checkout-total'> ${allTotal}.00</div>
    <div className='taxes-are-dumb'>Shipping & taxes calculated at checkout</div>
    <div className='final-checkout'>
      
    <StripeCheckout
    token={this.onToken}
    stripeKey={ process.env.REACT_APP_STRIPE_PUBLIC_KEY }
    amount={allTotal * 100}
      />

    </div>
    </div>
    </div>
    <div className='cart-footer'></div>
    <div className='cart-footer-backup'></div>
    <div className='cart-footer-backup2'></div>
    </div>
    </div>) : (<div className='empty-cart'>SORRY NOTHING IS IN HERE<span role="img"></span> </div> )} 
</div>
  );
}
}

function mapStateToProps(state) { 
  return {
    products: state.products,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { removeFromCart  })(Cart);