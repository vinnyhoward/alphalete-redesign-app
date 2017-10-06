import React, { Component } from 'react';
import { getAllProducts } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';


function searchingFor(term) {
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

class Search extends Component {
  constructor() {
    super()

    this.state = {

    }

  }

  componentDidMount() {
    this.props.getAllProducts()
  }




  render() {
    console.log(this.props);
    const allClothing = this.props.products.filter(searchingFor(this.state.term)).map((e, i) => {
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
      <div>
        {this.props.products}
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    products: state.products 
  }
}

export default connect(mapStateToProps, { getAllProducts })(Search);