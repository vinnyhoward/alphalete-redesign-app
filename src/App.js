import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Mens from './components/ProductContainer/MensContainer';
import WomansContainer from './components/ProductContainer/WomansContainer';
import Accessories from './components/ProductContainer/AccessoriesContainer';
import Cart from './components/Cart/Cart';
import Home from './components/ProductContainer/HomeContainer';
import Search from './components/ProductContainer/SearchContainer'
import SingleProductView from './components/SingleView/SingleProductView';

class App extends Component {

render() {
  return (
// =============================================================================
// NOTES - FINISH ROUTES 
// =============================================================================
<div>
<Navbar />
<Switch>
  <Route component={ Home } exact path="/"/>
  <Route component={ Search } path="/search"/>
  <Route component={ SingleProductView } path="/products/:id"/>
  <Route component={ Mens } path="/mens/"/>
  <Route component={ WomansContainer } path="/womans"/> 
  <Route component={ Accessories } path="/accessories"/>
  <Route component={ Cart } path="/cart"/>
</Switch>
</div>
  );
}
}

export default App;
