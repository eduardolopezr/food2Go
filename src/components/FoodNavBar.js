import React, { Component } from 'react';
import '../assets/css/foodNavBar.css'
import { Navbar, Nav, Card, Row, Container, Col, Button, Alert} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import IconHome from '../assets/images/icons/iconHome.png';
import IconPizza from '../assets/images/icons/iconPizza.png';
import IconBurger from '../assets/images/icons/iconBurger.png';
import IconChicken from '../assets/images/icons/iconChicken.png';
import IconTaco from '../assets/images/icons/iconTaco.png';
import IconHotDog from '../assets/images/icons/iconHotDog.png';
import IconDessert from '../assets/images/icons/iconDessert.png';
import Image from 'react-bootstrap/Image';
import Pizzaa2 from '../assets/images/pizzaa2.png';//Home
import Pizza3 from '../assets/images/pizza3.png';//Home
import Burger1 from '../assets/images/burger1.png';//Home
import Chicken1 from '../assets/images/chicken1.png';//Home
import Cake1 from '../assets/images/cake1.png';//Home
import Tacos1 from '../assets/images/tacos1.png';//Home

class FoodNavBar extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar bg="danger" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav justify fill variant="tabs" defaultActiveKey="/">
                                <Nav.Item>
                                    <Nav.Link eventKey="/">
                                        <Link to="/">
                                            <Image src={IconHome} alt="Home" title="Inicio"></Image>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">
                                        <Link to="/infoPizzas" >
                                            <Image src={IconPizza} alt="Pizza" title="Mostrar Pizzas"></Image>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">
                                        <Link to="/infoBurgers">
                                            <Image src={IconBurger} alt="Burger" title="Mostrar Hamburgesas " ></Image>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3">
                                        <Link to="/infoChickens" >
                                            <Image src={IconChicken} alt="Chickens" title="Mostrar Pollos"></Image>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-4">
                                        <Link to="/infoHotDogs">
                                            <Image src={IconHotDog} alt="HotDog" title="Mostrar Hot-Dogs"></Image>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-5">
                                        <Link to="/infoDesserts">
                                            <Image src={IconDessert} alt="Postre" title="Mostrar Postres"></Image>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/infoPizzas">
                            <InfoPizzas />
                        </Route>
                        <Route path="/infoBurgers">
                            <InfoBurgers />
                        </Route>
                        <Route path="/infoChickens">
                            <InfoChickens />
                        </Route>
                        <Route path="/infoTacos">
                            <InfoTacos />
                        </Route>
                        <Route path="/infoHotDogs">
                            <InfoHotDogs />
                        </Route>
                        <Route path="/infoDesserts">
                            <InfoDesserts />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}
class Home extends Component {
    render() {
        return (
            <>
                <br/>
                <hr/>
                <Container id="mainTitle">
                    <Row>
                        <Col sm={{offset:3}}>
                            <h1>Lo más Ñam Ñam de Food2Go</h1>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container className="justify-content-center">
                    <Row>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Pizzaa2} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Familiar Hawaiana</Card.Title>
                                    <Card.Text>
                                        Una exquisita pizza familiar Hawaiana para disfrutar en grupo.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Burger1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Big Hamburgesa Especial</Card.Title>
                                    <Card.Text>
                                        ¿Antojo de algo pero no sabes de qué? Esta hamburgesa es para ti.
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Chicken1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Tazón con 10 piezas de</Card.Title>
                                    <Card.Text>
                                        Este paquete es buenísimo para todos los integrantes de la familia.
                                        Disfruta de 10 piezas de pollo al estilo clásico.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Cake1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pastel de Fresa y Chocolate</Card.Title>
                                    <Card.Text>
                                        El perfecto pastel para el cumpleaños ideal
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Pizza3} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Familiar de Peperoni</Card.Title>
                                    <Card.Text>
                                        La perfecta Pizza Familiar para compartir.
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Tacos1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Orden de 5 Tacos de Pastor</Card.Title>
                                    <Card.Text>
                                        Para disfrutar una sola persona si estás hambriento.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <hr/>
            </>
        );
    }

}
class InfoPizzas extends Component {
    render() {
        return (
            <>
                <br/>
                <hr/>
                <Container id="mainTitle">
                    <Row>
                        <Col sm={{offset:3}}>
                            <h1>Estás Ñam Ñam Pizzas son para ti</h1>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container className="justify-content-center">
                    <Row>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Pizzaa2} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Familiar Hawaiana</Card.Title>
                                    <Card.Text>
                                        Una exquisita pizza familiar Hawaiana para disfrutar en grupo.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Burger1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Big Hamburgesa Especial</Card.Title>
                                    <Card.Text>
                                        ¿Antojo de algo pero no sabes de qué? Esta hamburgesa es para ti.
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Chicken1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Tazón con 10 piezas de</Card.Title>
                                    <Card.Text>
                                        Este paquete es buenísimo para todos los integrantes de la familia.
                                        Disfruta de 10 piezas de pollo al estilo clásico.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Cake1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pastel de Fresa y Chocolate</Card.Title>
                                    <Card.Text>
                                        El perfecto pastel para el cumpleaños ideal
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Pizza3} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Familiar de Peperoni</Card.Title>
                                    <Card.Text>
                                        La perfecta Pizza Familiar para compartir.
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Tacos1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Orden de 5 Tacos de Pastor</Card.Title>
                                    <Card.Text>
                                        Para disfrutar una sola persona si estás hambriento.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <hr/>
            </>

        );
    }

}
class InfoBurgers extends Component {
    render() {
        return (
            <>
                <p>Estas son las hamburgesas que hay</p>
            </>
        );
    }
}
class InfoChickens extends Component {
    render() {
        return (
            <>
                <p>Estas son los pollos que hay</p>
            </>

        );
    }

}
class InfoTacos extends Component {
    render() {
        return (
            <>
                <p>Estas son los tacos que hay</p>
            </>

        );
    }
}
class InfoHotDogs extends Component {
    render() {
        return (
            <>
                <p>Estos son los Hot-Dogs que hay</p>
            </>
        );
    }

}
class InfoDesserts extends Component {
    render() {
        return (
            <>
                <p>Estos son los postres que hay</p>
            </>

        );
    }
}
export default FoodNavBar;