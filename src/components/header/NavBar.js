import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import '../../assets/css/navBar.css';
import { logout, isLogin } from '../../routes/validate_login';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }
    
    render() {

        let session = [];

        if(isLogin() === true) {
            session.push(<ShoppingCart />)
        } else {
            alert('Inicie Sesión!')
        }

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
                        <div className="mr-3 text-center">
                            {this.state.isLogin ? 
                                    <Link onClick={() => this.handleLogout()}>
                                        <h6 className="userOptions">Cerrar Sesión</h6>
                                    </Link>
                                : <div><Link to="/login"><h6 className="userOptions">Iniciar Sesión</h6></Link> <Link to="/signup" className="">
                                <h6 className="userOptions">Regístrate!</h6>
                            </Link></div>
                            }
                        </div>
                        <div className="cart">
                            {session}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function ShoppingCart() {
    return (
        <Link to="/shopping_cart">
            <FontAwesomeIcon className="icon_car" icon={faShoppingCart} size="2x"/>
        </Link>
    );
}


export default NavBar;