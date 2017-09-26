import React from "react";
import { Switch, Route } from 'react-router-dom';
import Mens from './components/Mens/Mens';
import Womens from './components/Womens/Womens';
import Accessories from './components/Accessories/Accessories';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';

export default function router() {
  return (
    <Switch>
    <Route component={ Mens } path="/mens" />
    <Route component={ Womens } path="/womens" /> 
    <Route component={ Accessories } path="/accessories" />
    <Route component={ Login } path="/login" />
    <Route component={ Cart } path="/car" />
  </Switch>
  )
}