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
        <div key={i}>
        <h1>{e.title}</h1>
        <img className='img-container' src={e.image1} alt=" " />
        <p>{e.description}</p>
        <p>${e.price}</p>
        </div>
      )
    })
    
    
        return (
          <div>
            <div class="dropdown">
            <button class="dropbtn">SORT BY</button>
            <div class="dropdown-content">
            <a href="#">FEATURED</a>
            <a href="#">PRICE: HIGH TO LOW</a>
            <a href="#">PRICE: LOW TO HIGH</a>
            <a href="#">POPULAR</a>
            <a href="#">BEST SELLERS</a>
            </div>
            </div>

            { mensClothing }
          </div>
        )
      }
    
    };

export default Mens;