import React, { Component } from 'react'
// =============================================================================
// DUMB COMPONENT - WOMANS FILTER
// =============================================================================
export default class WomansFilter extends Component {
  render() {
    return (
      <div>
        <ul className='sort-filter'>
        <li >Sort By</li>
        <li onClick={ this.getWomansLowHigh } >Low to High</li>
        <li onClick={ this.getWomansHighLow }>High to Low</li>
        <li onClick={ this.getWomansLowHigh }>A-Z</li>
        <li onClick={ this.getWomansHighLow }>Z-A</li> 
      </ul>
      </div>
    )
  }
}
