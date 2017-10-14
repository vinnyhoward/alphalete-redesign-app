import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ removeFromCart } from '../../ducks/ProductsDucks'

class Cart extends Component {


  render() {
let shoppingCartDisplay = this.props.cart.map((product, i ) => {
  console.log(product);
  return (
    <div key={i}>
      <div>
        {product.title}
        {product.price}

        {/* {
          this.props.cart.reduce((sum, item) => {
          return sum + (product.price * product.qty)
        },0)
        } */}

        <button onClick={ () => {this.props.removeFromCart(product.productid)}} ></button>
      </div>
    </div>
  )
})
    return (
      <div>
        { shoppingCartDisplay }
        {
          this.props.cart.reduce((sum, item) => {
          return sum + (product.price * product.qty)
        },0)
        }
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