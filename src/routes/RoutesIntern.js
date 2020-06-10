import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import Menu from '../components/header/Menu';
import Banner from '../components/header/Background';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Info from '../components/InfoProduct';

import Home from '../pages/home';
import Pizza from '../pages/pizza';
import Burger from '../pages/burgers';
import Chicken from '../pages/chickens';
import HotDog from '../pages/hotdogs';
import Dessert from '../pages/desserts';

const RoutesIntern = () => (
  <div>
    {/* <NavBarTop /> */}
    <Banner />
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/productos/pizzas" component={Pizza} />
      <Route path="/productos/burgers" component={Burger} />
      <Route path="/productos/chickens" component={Chicken} />
      <Route path="/productos/hotdogs" component={HotDog} />
      <Route path="/productos/desserts" component={Dessert} />
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path='/info/:pizzaId' component={Info}/>
    </Switch>
  </div>
);

export default RoutesIntern;