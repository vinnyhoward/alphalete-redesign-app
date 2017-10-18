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
          <div className='single-body'>
            <div className='header-single'></div>
            <div className='single-wrapper'>
              <div className='margin-left-single'></div>
              <div className='picture-single-content'>
              <img className='image-single' src={this.state.singleProduct.image1} alt='' />
                <div className='nested-images'>
                <img className='nested-image' src={this.state.singleProduct.image1} alt='' />
                <img className='nested-image' src={this.state.singleProduct.image2} alt='' />
                <img className='nested-image' src={this.state.singleProduct.image3} alt='' />
              </div>
              </div>
              <div className='info-single-content'>
              <div className='product-info-caption'>

                <div className='title-price'>
                  <div className='single-title'>{this.state.singleProduct.title}</div>
                  <div className='single-color'>{this.state.singleProduct.color}</div>
                  <div className='single-price'>${this.state.singleProduct.price}.00</div>
                  <hr/>
                </div>

              <div className='color-share'>

              <div className='color-title'>COLOR</div>
              <div className='share-title'>SHARE</div>
      
              </div>
              
              <div className='size-cart'>
              <hr/>
              {/* SIZE */}
              <div className="dropdown-size-size">
              <button className="dropbtn-size">SIZE</button>
              <div className="dropdown-content-size">
              <a >Link 1</a>
              <a >Link 2</a>
              <a >Link 3</a>
              </div>
              </div>
              {/* <div className="qty-button-clicker"></div> */}
              <button className='add-cart-button' onClick={ () => {this.props.addToCart(this.state.singleProduct.productid)}}
              > ADD TO CART</button>
             

              <hr/>
              </div>
              <div className='description-title'>{this.state.singleProduct.descriptiontitle}</div>
              <div className='product-info'>{this.state.singleProduct.description}</div>
              </div>
              </div>
              <div className='margin-right-single'></div>
              <div className='back'></div>
              <div className='single-footer'></div>
            </div>
          {/* <img src={this.state.singleProduct.image1} alt='' />
              <div>{this.state.singleProduct.title}</div>
              <div>{this.state.singleProduct.color}</div>
              <div>{this.state.singleProduct.price}</div>
    
          <button onClick={ () => {this.props.addToCart(this.state.singleProduct.productid)}}> ADD TO CART</button> */}
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