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

<div>
<div className='banner'></div>
<div className='banner-title'>SHOP ACCESSORIES</div>
<div className='body-color-prod'>
<div className="product-container-wrapper">
<div className='margin-left-prod'></div>
<div className='side-bar-prod'></div> 
<div className='content-prod'>
<div className='nested-content-prod'>

<div className='sort-filter-wrapper'>
<div className='sort-label'>SORT BY</div>
<a className='filter-button' onClick={ this.getMensLowHigh }>LOW TO HIGH</a>
<a className='filter-button' onClick={ this.getMensHighLow }>HIGH TO LOW</a>
<a className='filter-button' onClick={ this.getMensAsc } >A-Z</a>
<a className='filter-button' onClick={ this.getMensDesc } >Z-A</a>
</div>

</div>
<div className='nested-content-prod'>

{/* <div className='sort-filter-wrapper'>
  <div className='sort-label'>SORT BY</div>
<a className='filter-button' onClick={ this.getMensLowHigh }>LOW TO HIGH</a>
<a className='filter-button' onClick={ this.getMensHighLow }>HIGH TO LOW</a>
<a className='filter-button' onClick={ this.getMensAsc } >A-Z</a>
<a className='filter-button' onClick={ this.getMensDesc } >Z-A</a>
</div> */}
  
</div>
<div className='nested-content-prod'>
{accessClothing}
</div>
</div>
<div className='margin-right-prod'></div>
</div>
</div>
</div>

/* <div className='body-padding'>
<div className='banner'></div>
<div className='banner-title'>SHOP ACCESSORIES</div>
<div className='margin-default'>
<div className='product-container'>
<div className='header-filter'>
<div className='sort-filter-wrapper'>
<div className='sort-label'>SORT BY</div>
<a className='filter-button' onClick={ this.getAccessLowHigh }>LOW TO HIGH</a>
<a className='filter-button' onClick={ this.getAccessHighLow }>HIGH TO LOW</a>
<a className='filter-button' onClick={ this.getAccessAsc } >A-Z</a>
<a className='filter-button' onClick={ this.getAccessDesc } >Z-A</a>
</div>
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
</div> */
        )
      }
    };

    function mapStateToProps(state) { 
      return {
        products: state.products 
      }
    }

    export default connect(mapStateToProps, { getAllProducts })(Accessories);