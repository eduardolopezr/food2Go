import React,{Component} from 'react';
import './assets/css/background.css';
import {Image} from 'react-bootstrap'
import BGImage from './assets/images/bg.png'; 

class Background extends Component{
    render(){
        return(
            <Image id="bGImage" src={BGImage} alt="food" fluid></Image>
        );
    }
}
export default Background;