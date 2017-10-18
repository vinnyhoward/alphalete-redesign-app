import React, { Component } from 'react';
import { getAllProducts, getMensAsc, getMensDesc, getMensLowHigh, getMensHighLow } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';
import Products from '../Products/Product';
import MensSideBarNav from '../SideBarNav/MensSideBarNav';


class Mens extends Component {
  constructor(props) {
    super(props)

    this.state= {
      products: [],
      value: 2
    }
    //MENS BINDED
    this.getMensAsc = this.getMensAsc.bind(this)
    this.getMensDesc = this.getMensDesc.bind(this)
    this.getMensLowHigh = this.getMensLowHigh.bind(this)
    this.getMensHighLow = this.getMensHighLow.bind(this)
  }

  handleChange = (event, index, value) => 
  this.setState({
    value
  });

  getMensAsc() {
    this.props.getMensAsc()
  }
  getMensDesc() {
    this.props.getMensDesc()
  }
  getMensLowHigh() {
    this.props.getMensLowHigh()
  }
  getMensHighLow() {
    this.props.getMensHighLow()
  }
 
  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {

    const mensClothing = this.props.products.filter(function(products, i) {
      return products.gender === 'MALE';
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
<div className='banner-title'>SHOP MENS</div>
<div className='body-color-prod'>
<div className="product-container-wrapper">
<div className='margin-left-prod'></div>
<div className='side-bar-prod'></div> 
<div className='content-prod'>
<div className='nested-content-prod'>
<div className='nested-content-prod'>
<div className='sort-filter-wrapper'>
  
  <div className='sort-label'>SORT BY</div>
<a className='filter-button' onClick={ this.getMensLowHigh }>LOW TO HIGH</a>
<a className='filter-button' onClick={ this.getMensHighLow }>HIGH TO LOW</a>
<a className='filter-button' onClick={ this.getMensAsc } >A-Z</a>
<a className='filter-button' onClick={ this.getMensDesc } >Z-A</a>
</div> 

</div>

{/* <div className='sort-filter-wrapper'>
  <div className='sort-label'>SORT BY</div>
<a className='filter-button' onClick={ this.getMensLowHigh }>LOW TO HIGH</a>
<a className='filter-button' onClick={ this.getMensHighLow }>HIGH TO LOW</a>
<a className='filter-button' onClick={ this.getMensAsc } >A-Z</a>
<a className='filter-button' onClick={ this.getMensDesc } >Z-A</a>
</div> */}
  
</div>
  <div className='nested-content-prod'>
  {mensClothing}
  </div>
</div>
<div className='margin-right-prod'></div>
</div>
</div>
</div>  

/* <div className='body-padding'>
<div className='banner'></div>
<div className='banner-title'>SHOP MENS</div>
<div className='margin-default'>
<div className='product-container'>
<div className='header-filter'>
<div className='sort-filter-wrapper'>
  <div className='sort-label'>SORT BY</div>
<a className='filter-button' onClick={ this.getMensLowHigh }>LOW TO HIGH</a>
<a className='filter-button' onClick={ this.getMensHighLow }>HIGH TO LOW</a>
<a className='filter-button' onClick={ this.getMensAsc } >A-Z</a>
<a className='filter-button' onClick={ this.getMensDesc } >Z-A</a>
</div>
  </div>
  <div className='content-container'>
  <div className='nested-content'>{mensClothing}</div>
  </div>
  <div className='pag'></div>
  <div className='footer-container'></div>
  <div className='side-bar-container'>
    <MensSideBarNav />
  </div>
  </div>
  </div>
  </div>   */
    )
  }
};

    function mapStateToProps(state) { 
      return {
        products: state.products 

      }
    }

    export default connect(mapStateToProps, { getMensAsc, getMensDesc, getMensLowHigh, getMensHighLow, getAllProducts })(Mens);