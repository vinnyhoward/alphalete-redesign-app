import React, { Component } from 'react';
import { getAllProducts } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const allClothing = this.props.products.slice(0, 4).map((e, i) => {
      return (
        <div key={i} className='product'>
        <img className='img' src={e.image1} alt=" " />
        <div className='caption-container'>
        <h1 className='product-title'>{e.title}</h1>
        <p className='product-color'>{e.color}</p>
        <p className='product-price'>${e.price}</p>
        <button className='cart-button'>ADD TO CART</button>
        </div>
        </div>

      )

    })

    return (
      <div className ='product-container'>
{ allClothing }
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    products: state.products 
  }
}

export default connect(mapStateToProps, { getAllProducts })(Home);