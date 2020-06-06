import React,{Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import Background from './Background';
import FoodNavBar from './FoodNavBar';

class App extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Background/>
        <FoodNavBar/>
      </div>
    );
  }
}

export default App;
