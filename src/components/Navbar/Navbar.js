import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { getSearchProducts } from '../../ducks/ProductsDucks'



class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      slideVisibleMens: false,
      slideVisibleWomans: false,
      slideVisibleAccess: false,
      searchOpen: false,
      term: '',

    }
this.openSlideMens = this.openSlideMens.bind(this)
this.openSlideWomans = this.openSlideWomans.bind(this)
this.openSlideAccess = this.openSlideAccess.bind(this)
this.searchAnimate = this.searchAnimate.bind(this)
this.changeHandler = this.changeHandler.bind(this)
this.keyPressHandler = this.keyPressHandler.bind(this)
  }


searchAnimate() {
  this.setState({
    searchOpen: !this.state.searchOpen
  })
}

openSlideMens() {
  this.setState({
    slideVisibleMens: !this.state.slideVisibleMens
  })
}

openSlideWomans() {
  this.setState({
    slideVisibleWomans: !this.state.slideVisibleWomans
  })
}

openSlideAccess() {
  this.setState({
    slideVisibleAccess: !this.state.slideVisibleAccess
  })
}

changeHandler(event){
  this.setState({
    term: event.target.value
  })
}

keyPressHandler(event){
  // console.log(event.charCode);


  if(event.charCode === 13){
    //Call action creator from ducks and pass this.state.term
    // let newlyDisplayed = this.state.getSearchProducts().filter, searchedProduct => this.state.searchedProduct.includes(event.target.value.toLowerCse()))

    // this.setState({
    //   searchTerm: event.target.value,
    //   currentlyDisplayed: newlyDisplayed
    // })
  }
}



  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Container">
      <ul className="left-nav">
      <li ><Link to="/">HOME</Link></li>
        <li onMouseOver={ this.openSlideMens }  ><Link to="/mens">MEN'S</Link></li>
        <li onMouseOver={ this.openSlideWomans } ><Link to="/womans">WOMEN'S</Link></li>
        <li onMouseOver={ this.openSlideAccess } ><Link to="/accessories">ACCESSORIES</Link></li>
        </ul>

       
        <ul className="right-nav">
        <li className="Nav-right"><Link to="/cart">CART</Link></li>
        <li className="Nav-right"><Link to="/login">ACCOUNT</Link></li>
        <li onMouseOver={this.searchAnimate} className="Nav-right">
        <input onChange={this.changeHandler} onKeyPress={this.keyPressHandler} className='Open-Search-Box' placeholder='Search' />SEARCH</li>
        </ul>
        
        
      </div>
      {/* <div className={this.state.searchAnimate ? 'Search-Box-Transitions Open-Search-Box' : ' '}></div>
      <div className={this.state.slideVisibleMens ? 'slide_mens open_mens' : ' '}> </div>
      <div className={this.state.slideVisibleWomans ? 'slide_womans open_womans' : ' '}></div>
      <div className={this.state.slideVisibleAccess ? 'slide_accessories open_accessories' : ' '}></div>  */}
      </div>
    )
  }
}

export default Navbar;