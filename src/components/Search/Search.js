import React, { Component } from 'react';
import { getAllProducts, getSearchProducts } from '../../ducks/ProductsDucks'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


// function searchingFor(term) {
//   return function(x){
//     return x.title.toLowerCase().includes(term.toLowerCase()) || !term
//   }
// }

class Search extends Component {
  constructor() {
    super()

    this.state = {

    }

  }

  componentDidMount() {
    function searchFilter(string) {
      const firstString = string[0] + string[1] + string[2]
      if( firstString === '?q=')
        return string.split('').slice(3).join('')
    }
    var searchTerm = searchFilter(this.props.location.search)
    if(searchTerm) {
      this.props.getSearchProducts(searchTerm)
    }
  }




  render() {
    console.log();

    const searchedClothing = this.props.products.map((e, i) => {
      return (
        <div key={i} className='product'>
         <Link to={`/mens/${e.productid}`}><img className='img-womans' src={e.image1} alt=" " /></Link>
        <div className='caption-container'>
        <h1 className='product-title'>{e.title}</h1>
        <p className='product-color'>{e.color}</p>
        <p className='product-price'>${e.price}</p>
        
        </div>
        </div>
      )
    })
    


    return ( 
      <div>
      { searchedClothing }
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    products: state.products 
  }
}

export default connect(mapStateToProps, { getAllProducts, getSearchProducts })(Search);