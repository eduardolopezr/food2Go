import React from 'react';
import '../../assets/css/foodNavBar.css'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IconHome from '../../assets/images/icons/iconHome.png';
import IconPizza from '../../assets/images/icons/iconPizza.png';
import IconBurger from '../../assets/images/icons/iconBurger.png';
import IconChicken from '../../assets/images/icons/iconChicken.png';
import IconHotDog from '../../assets/images/icons/iconHotDog.png';
import IconDessert from '../../assets/images/icons/iconDessert.png';

const FoodNavBar = () => (
    <Navbar bg="danger" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav justify fill variant="tabs">
                <Nav.Item>
                    <Link to="/" className="nav-link">
                        <Image src={IconHome} alt="Home" title="Inicio"></Image>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/productos/pizzas" className="nav-link">
                        <Image src={IconPizza} alt="Pizza" title="Mostrar Pizzas"></Image>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/productos/burgers" className="nav-link">
                        <Image src={IconBurger} alt="Burger" title="Mostrar Hamburgesas " ></Image>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/productos/chickens"  className="nav-link">
                        <Image src={IconChicken} alt="Chickens" title="Mostrar Pollos"></Image>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/productos/hotdogs" className="nav-link">
                        <Image src={IconHotDog} alt="HotDog" title="Mostrar Hot-Dogs"></Image>
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/productos/desserts" className="nav-link">
                        <Image src={IconDessert} alt="Postre" title="Mostrar Postres"></Image>
                    </Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default FoodNavBar;