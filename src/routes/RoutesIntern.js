import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '../components/header/Menu';
import Banner from '../components/header/Background';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Info from '../components/InfoProduct';
import ListCar from '../components/ListCart';

import Home from '../pages/home';
import Pizza from '../pages/pizza';
import Burger from '../pages/burgers';
import Chicken from '../pages/chickens';
import HotDog from '../pages/hotdogs';
import Dessert from '../pages/desserts';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const RoutesIntern = () => (
  <div>
    <Banner />
    <Menu />
    <Switch>
      <PublicRoute restricted={false} component={Login} path="/login"/>
      <PublicRoute restricted={false} component={Home} exact path="/"/>
      <Route component={Pizza} path="/productos/pizzas"/>
      <Route component={Burger} path="/productos/burgers"/>
      <Route component={Chicken} path="/productos/chickens"/>
      <Route component={HotDog} path="/productos/hotdogs"/>
      <Route component={Dessert} path="/productos/desserts"/>
      <PublicRoute restricted={false} component={Signup} path="/signup"/>
      <PublicRoute restricted={false} component={Info} path='/info/:pizzaId'/>

      <PrivateRoute component={ListCar} path="/shopping_cart"/>
    </Switch>
  </div>
);

export default RoutesIntern;