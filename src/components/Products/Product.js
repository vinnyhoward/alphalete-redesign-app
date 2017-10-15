import React from 'react';
import { Link } from "react-router-dom";
// =============================================================================
// DUMB COMPONENT - PRODUCTS
// =============================================================================
function Products(props) {
    return (
      <div>
      <div>
      <div className='product'>
      <Link to={`/products/${props.products.productid}`}><img className='img-product' src={props.products.image1} alt=" " /></Link>
      <div className='caption-container'>
      <div className='product-title'>{props.products.title}</div>
      <p className='product-color'>{props.products.color}</p>
      <p className='product-price'>${props.products.price}</p>
      </div>
      </div>
      </div>
      </div>
    )
  }

export default Products
