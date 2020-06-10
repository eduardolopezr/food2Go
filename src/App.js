import React,{Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Background from './components/Background';
import FoodNavBar from './components/FoodNavBar';

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
