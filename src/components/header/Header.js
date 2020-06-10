import React,{Component} from 'react';

import Background from './Background';
import NavBar from './NavBar';

class Header extends Component{
    render(){
        return(
            <div>
                <NavBar />
                <Background />
            </div>
        );
    }
}

export default Header;