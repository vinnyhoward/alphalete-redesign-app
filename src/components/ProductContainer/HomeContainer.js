import React, { Component } from 'react';
import { getAllProducts } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';
import Products from '../../components/Products/Product'
import { Link } from "react-router-dom";

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
<Link to='/mens'><button className='explore-button'>SHOP NOW</button></Link>
</div>
<div className='main-page-wrapper'>
<div className='home-margin-right'></div>
<div className='content-main-alpha'>{ allClothing }</div>
<div className='home-margin-left'></div>
<div className='featured-person'></div>
<div className='email-sub'></div>
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