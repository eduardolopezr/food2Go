import React from 'react';
import { render, BrowserHistory } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';

render(
  <Router history={BrowserHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);

