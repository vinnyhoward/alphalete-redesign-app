import React, { Component } from 'react';
import './Womans.css';
import { getAllWomansProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';

class Womans extends Component {
  constructor(props) {
    super(props)

    //MENS BINDED
    this.getWomansAsc = this.getWomansAsc.bind(this)
    this.getWomansDesc = this.getWomansDesc.bind(this)
    this.getWomansLowHigh = this.getWomansLowHigh.bind(this)
    this.getWomansHighLow = this.getWomansHighLow.bind(this)
  }
  
  componentDidMount() {
    this.props.getAllWomansProducts()
  }
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
        <img className='img' src={e.image1} alt=" " />
        <div className='caption-container'>
        <h1 className='product-title'>{e.title}</h1>
        <p className='product-color'>{e.color}</p>
        <p className='product-price'>${e.price}</p>
        <button className='cart-button'>ADD TO CART</button>
        </div>
        </div>

      )
    })
    
        return (
          <div> 
            <div className="dropdown">
            <button className="dropbtn">SORT BY</button>
            <div className="dropdown-content">
            <a onClick={ this.getWomansAsc }>Alphabetically, A-Z</a>
            <a onClick={ this.getWomansDesc }>Alphabetically, Z-A</a>
            <a onClick={ this.getWomansLowHigh }>Price, low to high</a>
            <a onClick={ this.getWomansHighLow }>Price, high to low</a>
            </div>
            </div>
  
          <div className ='product-container'>
            {/* <FilterDropDownMenu /> */}
            
            { womansClothing }
           
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