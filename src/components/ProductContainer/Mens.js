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

<div className='body-padding'>
<div className='banner'></div>
<div className='banner-title'>SHOP MENS</div>
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
  <div className='nested-content'>{mensClothing}</div>
  </div>
  <div className='pag'></div>
  <div className='footer-container'></div>
  <div className='side-bar-container'>
    <MensSideBarNav />
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

    export default connect(mapStateToProps, { getMensAsc, getMensDesc, getMensLowHigh, getMensHighLow, getAllProducts })(Mens);