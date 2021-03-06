import React, { Component } from 'react';
import { getAllProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow } from '../../ducks/ProductsDucks';
import { connect } from 'react-redux';
import Products from '../Products/Product';
// import SideBarNav from '../SideBarNav/SideBarNav';

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
    <div key={i}>
    <Products 
    key={i}
    products={products}
    />
    </div>
  )
})
return (
<div>
<div className='banner-girl'></div>
<div className='banner-title'>SHOP WOMANS</div>
<div className='body-color-prod'>
<div className="product-container-wrapper">
<div className='margin-left-prod'></div>
<div className='side-bar-prod'></div> 
<div className='content-prod'>
<div className='nested-content-prod'>

<div className='sort-filter-wrapper'>
<div className='sort-label'>SORT BY</div>
<a className='filter-button' onClick={ this.getWomanLowHigh }>LOW TO HIGH</a>
<a className='filter-button' onClick={ this.getWomansHighLow }>HIGH TO LOW</a>
<a className='filter-button' onClick={ this.getWomansAsc } >A-Z</a>
<a className='filter-button' onClick={ this.getWomansDesc } >Z-A</a>
</div> 
  
</div>
<div className='nested-content-prod'>
{womansClothing}
</div>
</div>
<div className='margin-right-prod'></div>
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