import React from 'react';
import './App.css';

import RouterInterno from './routes/RoutesIntern';
import NavBarTop from './components/header/NavBar';

const App = () => (
  <div>
    <NavBarTop />
    <RouterInterno />
  </div>
);

export default App;
