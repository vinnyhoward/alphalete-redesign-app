import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Mens from './components/ProductContainer/Mens';
import WomansContainer from './components/ProductContainer/WomansContainer';
import Accessories from './components/Accessories/Accessories';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Search from './components/Search/Search'
import SingleProductView from './components/SingleView/SingleProductView';
// import All from './components/Mens/AllMens'
// import Tops from './components/Mens/Tops'
// import Premium from './components2/Mens/Premium'
// import Joggers from './components/Mens/Joggers'
// import Shorts from './components/Mens/Shorts'
// import MustGo from './components/Mens/MustGo'

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
  {/* <Route component={ All } path="/mens/all"/> 
  <Route component={ Tops } path="/mens/tops"/>
  <Route component={ Premium } path="/mens/premium"/>
  <Route component={ Joggers } path="/mens/joggers"/>
  <Route component={ Shorts } path="/mens/shorts"/>
  <Route component={ MustGo } path="/mens/mustgo"/>  */}
</Switch>
    </div>
  );
}
}

export default App;
