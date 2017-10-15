import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';



function Products(props) {
    return (
      <div>
      <div>
      <div className='product'>
      <Link to={`/products/${props.products.productid}`}><img className='img-womans' src={props.products.image1} alt=" " /></Link>
      <div className='caption-container'>
      <h1 className='product-title'>{props.products.title}</h1>
      <p className='product-color'>{props.products.color}</p>
      <p className='product-price'>${props.products.price}</p>
      </div>
      </div>
      </div>
      </div>
    )
  }

export default Products
