import React,{Component}  from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class FoodNavBar extends Component{
    render(){
        return(
        <Navbar bg="danger" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav>
                    <Nav.Link href="#">Comida</Nav.Link>
                    <Nav.Link href="#">Comida</Nav.Link>
                    <Nav.Link href="#">Comida</Nav.Link>
                    <Nav.Link href="#">Comida</Nav.Link>
                    <Nav.Link href="#">Comida</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}
export default FoodNavBar;