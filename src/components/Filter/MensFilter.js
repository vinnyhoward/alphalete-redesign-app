import React, { Component } from 'react'
// =============================================================================
// DUMB COMPONENT - MENS FILTER
// =============================================================================
export default class MensFilter extends Component {
  render() {
    return (
      <div>
        <ul className='sort-filter'>
        <li >SORT BY</li>
        <li onClick={ this.props.getMensLowHigh } >LOW TO HIGH</li>
        <li onClick={ this.getMensHighLow }>HIGH TO LOW</li>
        <li onClick={ this.getMensLowHigh }>A-Z</li>
        <li onClick={ this.getMensHighLow }>Z-A</li> 
      </ul>
      </div>
    )
  }
}
