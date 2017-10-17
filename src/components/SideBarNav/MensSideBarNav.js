import React, { Component } from 'react';
import './SideBar.css'

class SideNav extends Component {
  render() {
    return (
      <div className='sidebar'>
           <ul className='side-nav-container'>

             <h3 className='color-filter'>CATEGORY</h3>
             <hr/>
          <li className='sidelist'>All Products</li>
          <li className='sidelist'>Tops</li>
          <li className='sidelist'>Leggings</li>
          <li className='sidelist'>Shorts</li>

            <h3 className='color-filter'>FILTER</h3>
            <hr/>
            <ul className='color-container'>
              <li className='box1'></li>
              <li className='box2'></li>
              <li className='box3'></li>
              <li className='box4'></li>
              <li className='box5'></li>
              <li className='box6'></li>
              <li className='box7'></li>
              <li className='box8'></li>
            </ul>
           </ul>
           
      </div>
    );
  }
}

export default SideNav;