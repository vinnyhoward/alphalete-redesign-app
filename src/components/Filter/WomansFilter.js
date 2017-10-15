import React, { Component } from 'react'
// =============================================================================
// DUMB COMPONENT - WOMANS FILTER
// =============================================================================
export default class WomansFilter extends Component {
  render() {
    return (
      <div>
        <ul className='sort-filter'>
        <li >SORT BY</li>
        <li onClick={ this.props.getWomansLowHigh } >LOW TO HIGH</li>
        <li onClick={ this.getWomansHighLow }>HIGH TO LOW</li>
        <li onClick={ this.getWomansLowHigh }>A-Z</li>
        <li onClick={ this.getWomansHighLow }>Z-A</li> 
      </ul>
      </div>
    )
  }
}
