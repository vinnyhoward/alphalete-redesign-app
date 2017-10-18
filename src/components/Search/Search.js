import React, { Component } from 'react';
import { getAllProducts, getSearchProducts } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Products from '../Products/Product';

// function searchingFor(term) {
//   return function(x){
//     return x.title.toLowerCase().includes(term.toLowerCase()) || !term
//   }
// }

class Search extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  componentDidMount() {
    function searchFilter(string) {
      const firstString = string[0] + string[1] + string[2]
      if( firstString === '?q=')
        return string.split('').slice(3).join('')
    }
    var searchTerm = searchFilter(this.props.location.search)
    if(searchTerm) {
      this.props.getSearchProducts(searchTerm)
    }
  }

  render() {

    const searchedClothing = this.props.products.map((products, i) => {
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
<div className='banner-title'>SEARCH</div>
<div className='body-color-prod'>
<div className="product-container-wrapper">
<div className='margin-left-prod'></div>
<div className='side-bar-prod'></div> 
<div className='content-prod'>
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
{searchedClothing}
</div>
</div>
<div className='margin-right-prod'></div>
</div>
</div>
</div>

    );
  }
}

function mapStateToProps(state) { 
  return {
    products: state.products 
  }
}

export default connect(mapStateToProps, { getAllProducts, getSearchProducts })(Search);