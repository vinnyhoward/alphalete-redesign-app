import React, { Component } from 'react';
import { getOne } from '../../services/productService';
import axios from 'axios';
import './Womens.css';

class Womens extends Component {
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
    axios.get(`/api/getproducts/womens`).then(res => {
      this.setState({
        products: res.data
        
      })
      console.log(res.data);
    })
  }


  render() {
    const womensClothing = this.state.products.map((e, i) => {
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

            { womensClothing }


          
          </div>
        )
      }
    
    };

export default Womens;