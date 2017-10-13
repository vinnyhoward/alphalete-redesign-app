import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ removeFromCart } from '../../ducks/ProductsDucks'

class Cart extends Component {
  render() {
let shoppingCartDisplay = this.props.cart.map((product, i ) => {
  return (
    <div key={i}>
      <div>
        {product.title}
        {product.price}
        <button onClick={ () => {this.props.removeFromCart(i)}} ></button>
      </div>
    </div>
  )
})
    return (
      <div>
        
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