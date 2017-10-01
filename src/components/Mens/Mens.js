import React, { Component } from 'react';
// import { getOne } from '../../services/productService';
import axios from 'axios';
import './Mens.css';
import { getAllMensProducts, getMensAsc, getMensDesc, getMensLowHigh, getMensHighLow } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';
// import FilterDropDownMenu from '../FilterDropDownMenu/FilterDropDownMenu';

class Mens extends Component {
  constructor(props) {
    super(props)

    //MENS BINDED
    this.getMensAsc = this.getMensAsc.bind(this)
    this.getMensDesc = this.getMensDesc.bind(this)
    this.getMensLowHigh = this.getMensLowHigh.bind(this)
    this.getMensHighLow = this.getMensHighLow.bind(this)
  }
  
  componentDidMount() {
    this.props.getAllMensProducts()
  }
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
 

  render() {
    const mensClothing = this.props.products.map((e, i) => {
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
            <a onClick={ this.getMensAsc }>Alphabetically, A-Z</a>
            <a onClick={ this.getMensDesc }>Alphabetically, Z-A</a>
            <a onClick={ this.getMensLowHigh }>Price, low to high</a>
            <a onClick={ this.getMensHighLow }>Price, high to low</a>
            </div>
            </div>
  
          <div className ='product-container'>
            {/* <FilterDropDownMenu /> */}
            
            { mensClothing }
           
          </div>
          </div>
        )
      }
    
    };

    function mapStateToProps(state) { //mapping global state to our local app props
      return {
        products: state.products // it can now be accessed by "this.props.starsWarsPeople" 
      }
    }

    export default connect(mapStateToProps, { getAllMensProducts, getMensAsc, getMensDesc, getMensLowHigh, getMensHighLow  })(Mens); // "getAllMensProducts is passed down