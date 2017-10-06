import React from "react";
import { Switch, Route } from 'react-router-dom';
import Mens from './components/Mens/Mens';
import Womans from './components/Womans/Womans';
import Accessories from './components/Accessories/Accessories';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Search from './components/Search/Search'
import SingleProductView from './components/SingleView/SingleProductView';
// import All from './components/Mens/AllMens'
// import Tops from './components/Mens/Tops'
// import Premium from './components/Mens/Premium'
// import Joggers from './components/Mens/Joggers'
// import Shorts from './components/Mens/Shorts'
// import MustGo from './components/Mens/MustGo'

export default (

    <Switch>

    {/* <Route component={ SingleProductView } path="/:id"/> */}
    
    <Route component={ Home } exact path="/"/>
    <Route component={ Search } path="/search?term"/>
    <Route component={ SingleProductView } path="/mens/:id"/>
    <Route component={ Mens } path="/mens/" />
    <Route component={ Womans } path="/womans" /> 
    <Route component={ Accessories } path="/accessories" />
    <Route component={ Login } path="/login" />
    <Route component={ Cart } path="/car" />

    {/* <Route component={ All } path="/mens/all" /> */}
    {/* <Route component={ Tops } path="/mens/tops" />
    <Route component={ Premium } path="/mens/premium" />
    <Route component={ Joggers } path="/mens/joggers" />
    <Route component={ Shorts } path="/mens/shorts"/>
    <Route component={ MustGo } path="/mens/mustgo" /> */}

  </Switch>
)
