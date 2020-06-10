import React,{ Component }  from 'react';
import { Container } from 'react-bootstrap';

import HeaderImg from './headerImage';
import DataLogin from './dataSignUp';
import '../../assets/css/login_signup.scss';

class Login extends Component {
    render(){
        return(
            <div>
                <Container className="container_full">
                    <HeaderImg />
                    <DataLogin />
                </Container>
                <div className="background_full_signup"></div>
            </div>
        );
    }
}
export default Login;