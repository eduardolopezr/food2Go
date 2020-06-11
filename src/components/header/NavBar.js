import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import '../../assets/css/navBar.css';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="danger" expand="lg" id="navBar">
                <Link to="/">
                    <Navbar.Brand><h2 id="brandF2G">Food2Go</h2></Navbar.Brand>
                </Link>
                <Navbar.Text>
                    <h5 className="contact">Contáctanos</h5>
                    <p className="contact">Teléfono: +52 4422 73 64 26</p>
                </Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link>
                            <Link to="/login">
                                <h6 className="userOptions">¡Inicia Sesión!</h6>
                            </Link>
                        {/* </Nav.Link>
                        <Nav.Link> */}
                            <Link to="/signup">
                                <h6 className="userOptions">¡Regístrate!</h6>
                            </Link>
                        </Nav.Link>
                        <div className="cart">
                            <Link to="/shopping_cart">
                                <FontAwesomeIcon className="icon_car" icon={faShoppingCart} size="2x"/>
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavBar;