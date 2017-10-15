import React, { Component } from 'react';
import { getAllWomansProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow } from '../../ducks/ProductsDucks';
import { connect } from 'react-redux';
import SideBarNav from '../SideBarNav/SideBarNav';
import Products from '../Products/Product';
import WomansFilter from '../Filter/WomansFilter'

class Womans extends Component {
  constructor(props) {
    super(props)
        this.state= {
          products: [],
          value: 2
        }
// =============================================================================
// WOMANS BINDED
// =============================================================================
    this.getWomansAsc = this.getWomansAsc.bind(this)
    this.getWomansDesc = this.getWomansDesc.bind(this)
    this.getWomansLowHigh = this.getWomansLowHigh.bind(this)
    this.getWomansHighLow = this.getWomansHighLow.bind(this)
  }
// =============================================================================
// METHODS
// =============================================================================
  handleChange = (event, index, value) => 
  this.setState({
    value
  });
// =============================================================================
//
// =============================================================================
  componentDidMount() {
    this.props.getAllWomansProducts()
  }
// =============================================================================
// FILTER METHODS
// =============================================================================
  getWomansAsc() {
    this.props.getWomansAsc()
  }
  getWomansDesc() {
    this.props.getWomansDesc()
  }
  getWomansLowHigh() {
    this.props.getWomansLowHigh()
  }
  getWomansHighLow() {
    this.props.getWomansHighLow()
  }

render() {
  const womansClothing = this.props.products.map((products, i) => {
    return (
    <Products 
    key={i}
    products={products}
    />
    )
  })
    return (
<div>
  <div className='banner-womans'></div>
  <div className='banner-womans-title'>SHOP WOMANS</div>
  <div className='margin-default'>
  <div className='product-container'>
      <div className='header-filter'>
        <WomansFilter 
        products={getWomansLowHigh()}
        />
        </div>
      <div className='content-container'>
        <div className='nested-content'>{womansClothing}</div>
        </div>
      <div className='pag'></div>
      <div className='footer-container'></div>
      <div className='side-bar-container'><SideBarNav /></div>
  </div>
  </div>
  </div>
    )
  }
};

    function mapStateToProps(state) { 
      return {
        products: state.products 

      }
    }

    export default connect(mapStateToProps, { getAllWomansProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow  })(Womans);