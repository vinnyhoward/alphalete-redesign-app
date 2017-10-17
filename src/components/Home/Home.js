import React, { Component } from 'react';
import { getAllProducts } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';
import Products from '../../components/Products/Product'

class Home extends Component {

  componentDidMount() {
    this.props.getAllProducts()
  }

render() {
const allClothing = this.props.products.slice(0, 4).map((products, i) => {
  return (
    <div className='product'>
    <Products 
    key={i}
    products={products}
    />
    </div>
  )
})

    return (
      <div className='home-body'>
      <div className='main-banner'>
        <div className='banner-text'>NEW RELEASES</div>
        <div className='banner-text-caption'>AVAILABLE NOW</div>
        <button className='explore-button'>SHOP NOW</button>
      </div>
      <div className='home-margin'>
      <div className='home-wrapper'>
      <div className='home-products'>
      { allClothing }
      </div>
      <div href='https://www.youtube.com/watch?v=U-RsYBRaYRc' className='featured-athletes'></div>
      <div className='find-out'></div>
      </div>
      </div>
      <div className='home-footer'></div>
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