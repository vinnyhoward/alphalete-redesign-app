import React, { Component } from 'react';
import { getAllProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow } from '../../ducks/ProductsDucks';
import { connect } from 'react-redux';
import SideBarNav from '../SideBarNav/SideBarNav';
import Products from '../Products/Product';

class Womans extends Component {
  constructor(props) {
    super(props)
        this.state= {
          products: [],
          value: 2,
          onProductHover: false
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
productHover() {
  this.setState({
  onProductHover: !this.state.onProductHover
  })
}
  handleChange = (event, index, value) => 
  this.setState({
    value
  });
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
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {
    const womansClothing = this.props.products.filter(function(products, i) {
      return products.gender === 'FEMALE';
    }).map(function(products, i) {
      return (
        <Products 
        key={i}
        products={products}
        />
      )
    })
    return (
<div className='body-padding'>
  <div className='banner'></div>
  <div className='banner-title'>SHOP WOMANS</div>
  <div className='margin-default'>
  <div className='product-container'>
      <div className='header-filter'>

      {/* <div ClassName="dropdown">
      <button ClassName="dropbtn">SORT BY</button>
      <div ClassName="dropdown-content">
      <a onClick={ this.getWomansLowHigh }>LOW TO HIGH</a>
        <a onClick={ this.getWomansHighLow }>HIGH TO LOW</a>
        <a onClick={ this.getWomansAsc } >A-Z</a>
        <a onClick={ this.getWomansDesc } >Z-A</a>
      </div>
      </div> */}

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

    export default connect(mapStateToProps, { getAllProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow  })(Womans);