import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { addToCart } from '../../ducks/ProductsDucks';


class SingleProductView extends Component {

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
    
          <button onClick={ () => {this.props.addToCart(this.state.singleProduct.productid)}}> ADD TO CART</button>
          </div>
      )
  }
}

function mapStateToProps(state) { 
  return {
    products: state.products 
  }
}

export default connect(mapStateToProps, { addToCart })( SingleProductView );


// const products = this.props.products.filter((product) => {
//   return product.category === this.props.category && product.subcategory === this.props.subcategory
// })

//returns categories and subcategories based on this.props