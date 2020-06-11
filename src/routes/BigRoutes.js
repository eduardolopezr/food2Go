import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import RouteInter from '../routes/RoutesIntern';
import NavBarTop from '../components/header/NavBar';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';

import RouterInter from '../routes/RoutesIntern';

const BigRoutes = () => (
  <div>
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={RouterInter} />
    </Switch>
  </div>
);

export default BigRoutes;