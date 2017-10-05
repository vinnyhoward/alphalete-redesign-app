import React, { Component } from 'react';
import './Mens.css';
import { getAllMensProducts, getMensAsc, getMensDesc, getMensLowHigh, getMensHighLow } from '../../ducks/ProductsDucks'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


class Mens extends Component {
  constructor(props) {
    super(props)

    this.state= {
      products: [],
      value: 2
    }

    //MENS BINDED
    this.getMensAsc = this.getMensAsc.bind(this)
    this.getMensDesc = this.getMensDesc.bind(this)
    this.getMensLowHigh = this.getMensLowHigh.bind(this)
    this.getMensHighLow = this.getMensHighLow.bind(this)
  }

  handleChange = (event, index, value) => 
  this.setState({
    value
  });

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
        <div key={i} className='Nested-Content-Box'>
        <Link to={`/mens/${e.productid}`}><img className='Product-Img' src={e.image1} alt=" " /></Link>
        <div className='Caption-Container'>
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
              <div className='Float-Mens'>MENS 
            
              <div className="dropdown"> 
              <DropDownMenu
              style={{
              width: '240px',
              height: '50px',
              margin: '0 auto',
    }}
              className='DropDown' value={this.state.value} onChange={this.handleChange} openImmediately={false}>
            <MenuItem value={1} onClick={ this.getMensAsc } primaryText="Alphabetically, A-Z" />
            <MenuItem value={2} onClick={ this.getMensDesc } primaryText="Alphabetically, Z-A" />
            <MenuItem value={3} onClick={ this.getMensLowHigh } primaryText="Price, low to high" />
            <MenuItem value={4} onClick={ this.getMensHighLow } primaryText="Price, high to low"  />
              </DropDownMenu>
            </div>


              </div>
              <div className='float-filter'>

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