import React, { Component } from 'react';
import './Womans.css';
import { getAllWomansProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import SideBarNav from '../SideBarNav/SideBarNav'

class Womans extends Component {
  constructor(props) {
    super(props)
        this.state= {
          products: [],
          value: 2
        }
// =============================================================================
// MENS BINDED
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
    const womansClothing = this.props.products.map((e, i) => {
      return (
        <div key={i} className='product'>
         <Link to={`/products/${e.productid}`}><img className='img-womans' src={e.image1} alt=" " /></Link>
        <div className='caption-container'>
        <h1 className='product-title'>{e.title}</h1>
       <p className='product-color'>{e.color}</p>

       <p className='product-price'>${e.price}</p>
        
        </div>
        </div>
      )
    })
        return (
          <div className='Body-Margin'>
          <div className="parallax"></div>
          <div className='wrapper'> 
          <div className='Header'>
            <div className='Filter-Align'>
            </div>
            <ul className='sort-filter'>
        
            <li >Sort By</li>
              <li onClick={ this.getWomansLowHigh } >Low to High</li>
              <li onClick={ this.getWomansHighLow }>High to Low</li>
              <li onClick={ this.getWomansLowHigh }>A-Z</li>
              <li onClick={ this.getWomansHighLow }>Z-A</li> 
            </ul>
            
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

    export default connect(mapStateToProps, { getAllWomansProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow  })(Womans);