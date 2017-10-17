import React, { Component } from 'react';
import { getAllProducts} from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';
import Products from '../Products/Product';
import SideBarNav from '../SideBarNav/MensSideBarNav';


class Accessories extends Component {
  constructor(props) {
    super(props)

    this.state= {
      products: [],
      value: 2
    }
  }
// =========================================================================
// COMPONENT DID MOUNT
// =========================================================================
  componentDidMount() {
    this.props.getAllProducts()
  }
  render() {
// =========================================================================
// JAVASCRIPT FILTER
// =========================================================================
    const accessClothing = this.props.products.filter(function(products, i) {
      return products.category === 'accessories';
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
<div className='banner-title'>SHOP ACCESSORIES</div>
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
  <div className='nested-content'>{accessClothing}</div>
  </div>
  <div className='pag'></div>
  <div className='footer-container'></div>
  <div className='side-bar-container'>
  <SideBarNav />
  </div>
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

    export default connect(mapStateToProps, { getAllProducts })(Accessories);