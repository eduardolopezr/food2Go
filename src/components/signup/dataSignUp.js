import React,{ Component }  from 'react';
import { Row, Col, Button, Container, Form, Navbar, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faUserLock } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            confirmed: '',
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeConfirmed = this.handleChangeConfirmed.bind(this);
    }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleChangeLastName(event) {
        this.setState({lastname: event.target.value});
    }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }
    handleChangePass(event) {
        this.setState({password: event.target.value});
    }
    handleChangeConfirmed(event) {
        this.setState({confirmed: event.target.value});
    }

    submit() {
        
        let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('lastname', this.state.lastname)
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)
        formData.append('password_confirmation', this.state.confirmed)
        
        console.log(this.state);

        axios.post('http://localhost:8000/api/auth/signup', formData)
        .then(respose => {
            console.log(respose.status)
        })
        .catch(error => {
            if(error === "Error: Request failed with status code 422") {
                alert("Usuario o contraseña inválidos")
            }
            // alert(error)
        })
    }

    render(){
        return(
            <Container className="content_data">
                <div className="content_alert" >
                    <Alert variant="success" className="alert false" id="#alert">
                        <Alert.Heading>Registro exitoso!</Alert.Heading>
                    </Alert>
                </div>
                <Row >
                    <Col className="center">
                        <h2>Sign Up</h2>
                        <Form className="content_form" method="POST">
                            <div className="content_inputs">
                                <Form.Group className="input_all" as={Row}>
                                    <Form.Label column sm="2" className="icon">
                                        <FontAwesomeIcon icon={faUser} size="lg"/>
                                    </Form.Label>
                                    <Col className="content_input">
                                        <Form.Control className="input" type="text" placeholder="Juan" id="name" name="name" 
                                            value={this.state.name} onChange={this.handleChangeName}/>
                                    </Col>
                                    <Col className="content_input" id="input">
                                        <Form.Control className="input" type="text" placeholder="Rodríguez" id="lastname" name="lastname" 
                                            value={this.state.lastname} onChange={this.handleChangeLastName}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group className="input_all" as={Row}>
                                    <Form.Label column sm="2" className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                                    </Form.Label>
                                    <Col sm="10" className="content_input">
                                        <Form.Control className="input" type="email" placeholder="example@mail.com" id="email" name="email"
                                            value={this.state.email} onChange={this.handleChangeEmail}/>
                                    </Col>
                                </Form.Group>

                                <Form.Group className="input_all" as={Row}>
                                    <Form.Label column sm="2" className="icon">
                                        <FontAwesomeIcon icon={faLock} size="lg"/>
                                    </Form.Label>
                                    <Col sm="10" className="content_input">
                                        <Form.Control className="input" type="password" placeholder="Contraseña" id="pass" name="pass"
                                            value={this.state.password} onChange={this.handleChangePass}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group className="input_all" as={Row}>
                                    <Form.Label column sm="2" className="icon">
                                        <FontAwesomeIcon icon={faUserLock} size="lg"/>
                                    </Form.Label>
                                    <Col sm="10" className="content_input">
                                        <Form.Control className="input" type="password" placeholder="Confirme contraseña" id="confpass" name="passConfi"
                                            value={this.state.confirmed} onChange={this.handleChangeConfirmed}/>
                                    </Col>
                                </Form.Group>
                            </div>
                            <Navbar.Text className="link">
                                <p>Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>
                            </Navbar.Text>

                            <div className="content_btn">
                                <Button className="btn_enviar" onClick={()=>this.submit()}>
                                    Registrarse
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