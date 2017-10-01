import React, { Component } from 'react';
import { getOne } from '../../services/productService';
import axios from 'axios';
import './Mens.css';

class Mens extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  // componentDidMount() {
  //   axios.get(`/api/getproduct/${this.props.match.params.id}`).then(res => {
  //     this.setState({
  //       product: res.data
  //     })
  //   })
  // }


componentDidMount() {
  axios.get(`/api/getproducts/mens`).then(res => {
      this.setState({
        products: res.data
 
      })
    })
  }


  render() {
    const mensClothing = this.state.products.map((e, i) => {
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
          <div className ='product-container'>
            { mensClothing }
          </div>
        )
      }
    
    };

export default Mens;