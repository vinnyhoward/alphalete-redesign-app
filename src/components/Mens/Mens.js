import React, { Component } from 'react';
import './Mens.css';
import { getAllMensProducts, getMensAsc, getMensDesc, getMensLowHigh, getMensHighLow } from '../../ducks/ProductsDucks'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// import MensSideNav from './MensSideNav'

class Mens extends Component {
  constructor(props) {
    super(props)

    //MENS BINDED
    this.getMensAsc = this.getMensAsc.bind(this)
    this.getMensDesc = this.getMensDesc.bind(this)
    this.getMensLowHigh = this.getMensLowHigh.bind(this)
    this.getMensHighLow = this.getMensHighLow.bind(this)
  }
  
  componentDidMount() {
    this.props.getAllMensProducts()
  }
  getMensAsc() {
    this.props.getMensAsc()
  }
  getMensDesc() {
    this.props.getMensDesc()
  }
  getMensLowHigh() {
    this.props.getMensLowHigh()
  }
  getMensHighLow() {
    this.props.getMensHighLow()
  }
 

  render() {
    const mensClothing = this.props.products.map((e, i) => {
      return (
        <div key={i} className='product'>
        <Link to={`/${i}`} ><img className='img' src={e.image1} alt=" " /></Link>
        <div className='caption-container'>
        <h1 className='product-title'>{e.title}</h1>
        <p className='product-color'>{e.color}</p>
        <p className='product-price'>${e.price}</p>
        </div>
        </div>

      )
    })
    
        return (
          
          <div className='Main'> 
          <div className='Wrapper'>


            <div className='Header'>
              <div className='Float-Mens'>MENS</div>
              <div className='float-filter'>

              <div className="dropdown"> 
            <button className="dropbtn">SORT BY</button>
            <div className="dropdown-content">
            <a onClick={ this.getMensAsc }>Alphabetically, A-Z</a>
            <a onClick={ this.getMensDesc }>Alphabetically, Z-A</a>
            <a onClick={ this.getMensLowHigh }>Price, low to high</a>
            <a onClick={ this.getMensHighLow }>Price, high to low</a>
            </div>
            </div>

              </div>
              </div>
            <div className='SideNav'></div>

            
            <div className='Content'>

          
          <div className ='product-container'>    
            { mensClothing }
          </div>
         

            </div>
            <div className='Footer'></div>


          </div>
          </div>
        )
      }
    
    };

    function mapStateToProps(state) { 
      return {
        products: state.products 
      }
    }

    export default connect(mapStateToProps, { getAllMensProducts, getMensAsc, getMensDesc, getMensLowHigh, getMensHighLow })(Mens);