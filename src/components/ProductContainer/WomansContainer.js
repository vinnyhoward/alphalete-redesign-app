import React, { Component } from 'react';
import '../Womans/Womans.css';
import { getAllWomansProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow } from '../../ducks/ProductsDucks';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
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
      <div className='Body-Margin'>
      <div className="parallax"></div>
      <div className='wrapper'> 
      <div className='Header'>
      <div className='Filter-Align'>
      </div>
      <WomansFilter />
      </div>
      <div className='margin-shop'>
      <SideBarNav />
      <div className='Nav'>
      </div>
      <div className='Content'> <div className='Nested-Content'>
        {womansClothing}
      </div></div>
      <div className='Email-Sub'></div>
      </div>
      <div className='Footer'></div>
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
  // const ProductContainer = connect(
  //   mapStateToProps,
  // )(Product)

  // const mapDispatchToProps = (dispatch) => {
  //   return {

  //   }
  // }

    export default connect(mapStateToProps, { getAllWomansProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow  })(Womans);