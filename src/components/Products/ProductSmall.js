import React from 'react';
import { Link } from "react-router-dom";
// =============================================================================
// DUMB COMPONENT - PRODUCTSMALL
// =============================================================================
function ProductSmall(props) {
    return (
      <div>
      <div>
      <div className='product-small-box'>
      <Link to={`/products/${props.products.productid}`}>
      <img  className='img-product-small' src={props.products.image1} alt=" " />
      </Link>
      <div className='caption-container-small'>

      <div className='product-title'>{props.products.title}</div>
      <p className='product-color'>{props.products.color}</p>
      {/* <hr/> */}
      <p className='product-price'>${props.products.price}</p>
      </div>
      </div>
      </div>
      </div>
    )
  }

export default ProductSmall
