import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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

const RoutesIntern = () => (
  <div>
    <Banner />
    <Menu />
    <Switch>
      <Route path="/login" component={Login}/>
      <Route exact path="/" component={Home} />
      <Route path="/productos/pizzas" component={Pizza} />
      <Route path="/productos/burgers" component={Burger} />
      <Route path="/productos/chickens" component={Chicken} />
      <Route path="/productos/hotdogs" component={HotDog} />
      <Route path="/productos/desserts" component={Dessert} />
      <Route path="/signup" component={Signup}/>
      <Route path='/info/:pizzaId' component={Info}/>

      {/* <Route exact path="/login">
        {Login ? <Redirect to="/shopping_car" /> : <Home />}
      </Route> */}
    </Switch>
  </div>
);

export default RoutesIntern;