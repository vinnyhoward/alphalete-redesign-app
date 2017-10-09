import React, { Component } from 'react';
import axios from 'axios';


export default class SingleProductView extends Component {

  constructor() {
    super()
    this.state = {
      singleProduct: {}
    }
  }
  componentDidMount() {
    axios.get(`/api/getproduct/${this.props.match.params.id}`).then( res => {
      this.setState({
        singleProduct: res.data
      })
    })
  }

  render() {
      return ( 

          <div>

            
            <img src={this.state.singleProduct.image1} alt='' />
              <h1>{this.state.singleProduct.title}</h1>
              <p>{this.state.singleProduct.color}</p>
              <p>{this.state.singleProduct.price}</p>

              
          </div>
      )
  }
}