import React,{ Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Button, Container, Form, Navbar } from 'react-bootstrap';

import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    handleChangePass(event) {
        this.setState({password: event.target.value});
    }

    submit() {
        
        let formData = new FormData();
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)
        
        console.log(this.state);

        axios.post('http://localhost:8000/api/auth/login', formData)
        .then(respose => {
            console.log(respose)
        })
        .catch(error => {
            alert(error)
        })
    }

    render(){
        return(
            <Container className="content_data">
                <Row >
                    <Col className="center">
                        <h2>Login</h2>
                        <Form className="content_form" method="POST">
                            <div className="content_inputs">
                                <Form.Group className="input_all" as={Row}>
                                    <Form.Label column sm="2" className="icon">
                                        <FontAwesomeIcon icon={faUser} size="lg"/>
                                    </Form.Label>
                                    <Col sm="10" className="content_input">
                                        <Form.Control className="input" type="email" placeholder="name@example.com" id="email" name="email"
                                            value={this.state.email} onChange={this.handleChangeEmail}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group className="input_all" as={Row}>
                                    <Form.Label column sm="2" className="icon">
                                        <FontAwesomeIcon icon={faLock} size="lg"/>
                                    </Form.Label>
                                    <Col sm="10" className="content_input">
                                        <Form.Control className="input" type="password" placeholder="Password" id="pass" name="pass"
                                            value={this.state.password} onChange={this.handleChangePass}/>
                                    </Col>
                                </Form.Group>
                            </div>
                            <Navbar.Text className="link">
                                <p>¿Aún no tienes una cuenta?  
                                    <Link to="/signup">
                                        <button> Regístrate</button>
                                    </Link>
                                </p>
                            </Navbar.Text>

                            <div className="content_btn">
                                <Button className="btn_enviar" onClick={()=>this.submit()}>
                                    Entrar
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Login;