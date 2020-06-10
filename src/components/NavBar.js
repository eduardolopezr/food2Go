import React, { Component } from 'react';
import '../assets/css/navBar.css';
import { Nav, Navbar } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="danger" expand="lg" id="navBar">
                <Navbar.Brand href="#"><h2 id="brandF2G">Food2Go</h2></Navbar.Brand>
                <Navbar.Text>
                    <h5 className="contact">Contáctanos</h5>
                    <p className="contact">Teléfono: +52 4422 73 64 26</p>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#"><h6 className="userOptions">¡Inicia Sesión!</h6></Nav.Link>
                        <Nav.Link href="#"><h6 className="userOptions">¡Regístrate!</h6></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavBar;