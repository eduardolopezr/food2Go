import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import RouterInterno from './routes/RoutesIntern';
import NavBarTop from './components/header/NavBar';
// import RouterExterno from './routes/BigRoutes';
// import Login from './components/login/Login';
// import Signup from './components/signup/Signup';

const App = () => (
  <div>
    <NavBarTop />
    <RouterInterno />
  </div>
);

export default App;
