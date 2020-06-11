import React,{Component} from 'react';
import {Image} from 'react-bootstrap'

import BGImage from '../../assets/images/bg.png'; 
import '../../assets/css/background.css';

class Background extends Component{
    render(){
        return(
            <Image id="bGImage" src={BGImage} alt="food" fluid></Image>
        );
    }
}
export default Background;