import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, singleProductView } from '../../ducks/ProductsDucks';


class SingleProductView extends Component {

  componentDidMount() {
    this.props.singleProductView(this.props.match.params.id)
  }


  render() {
    
return ( 
<div className='single-body'>
<div className='header-single'></div>

<div className='single-wrapper'>
<div className='margin-left-single'></div>

{/* // =============================================================================
// IMAGES
// ============================================================================= */}

<div className='picture-single-content'>
    <img className='image-single' src={this.props.singleProduct.image1} alt='' />
<div className='nested-images'>
    <img className='nested-image' src={this.props.singleProduct.image1} alt='' />
    <img className='nested-image' src={this.props.singleProduct.image2} alt='' />
    <img className='nested-image' src={this.props.singleProduct.image3} alt='' />
</div>
</div>



  <div className='info-single-content'>
  <div className='product-info-caption'>
<div className='title-price'>
{/* // =============================================================================
// CONTENT RIGHT
// ============================================================================= */}
  <div className='single-title'>{this.props.singleProduct.title}</div>
  <div className='single-color'>{this.props.singleProduct.color}</div>
  <div className='single-price'>${this.props.singleProduct.price}.00</div>
  <hr/>
</div>

<div className='color-share'>
  <div className='color-title'>COLOR</div>
  {
    (() => {
      console.log('object');
      if(this.props.singleProduct.color === 'MINT') {
        return <div className='mint'></div> 
      } else if(this.props.singleProduct.color === 'BURGUNDY') {
        return <div className='burgundy'></div>
      } else if(this.props.singleProduct.color === 'BLACK') {
        return <div className='black'></div>
      } else if(this.props.singleProduct.color === 'COOL GREY') {
        return <div className='cool-grey'></div>
      } else if(this.props.singleProduct.color === 'WHITE') {
        return <div className='white'></div>
      } 
    })()
  }




  <div className='share-title'>SHARE</div>
</div>
{/* // =============================================================================
// ADD TO CART AND SIZE
// ============================================================================= */}
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
  <button className='add-cart-button' onClick={ () => {this.props.addToCart(this.props.singleProduct.productid)}}
  > ADD TO CART</button>  
  <hr/>
</div>
{/* // =============================================================================
// TITLE AND DESCRIPTION
// ============================================================================= */}
  <div className='description-title'>{this.props.singleProduct.descriptiontitle}</div>
  <div className='product-info'>{this.props.singleProduct.description}</div>
  </div>
  </div>
  <div className='margin-right-single'></div>
  <div className='back'></div>
  <div className='single-footer'></div>
</div>
</div>
)
}
}

function mapStateToProps(state) { 
  return {
    products: state.products,
    singleProduct: state.singleProduct
  }
}

export default connect(mapStateToProps, { addToCart, singleProductView })( SingleProductView );


// const products = this.props.products.filter((product) => {
//   return product.category === this.props.category && product.subcategory === this.props.subcategory
// })

//returns categories and subcategories based on this.props