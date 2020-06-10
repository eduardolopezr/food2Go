import React, { Component } from 'react';
import '../assets/css/foodNavBar.css'
import { Navbar, Nav, Card, Row, Container, Col, Button, Alert} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import IconHome from '../assets/images/icons/iconHome.png';
import IconPizza from '../assets/images/icons/iconPizza.png';
import IconBurger from '../assets/images/icons/iconBurger.png';
import IconChicken from '../assets/images/icons/iconChicken.png';
import IconHotDog from '../assets/images/icons/iconHotDog.png';
import IconDessert from '../assets/images/icons/iconDessert.png';
import Image from 'react-bootstrap/Image';
import Pizzaa2 from '../assets/images/pizzaa2.png';//Home
import Pizza3 from '../assets/images/pizza3.png';//Home
import Burger1 from '../assets/images/burger1.png';//Home
import Chicken1 from '../assets/images/chicken1.png';//Home
import Cake1 from '../assets/images/cake1.png';//Home
import Tacos1 from '../assets/images/tacos1.png';//Home
import Pizza4 from '../assets/images/pizza4.png';//InfoPizzas
import Pizza5 from '../assets/images/pizza5.png';//InfoPizzas
import Pizza6 from '../assets/images/pizza6.png';//InfoPizzas
import Pizza7 from '../assets/images/pizza7.png';//InfoPizzas
import Pizza8 from '../assets/images/pizza8.png';//InfoPizzas
import Pizza9 from '../assets/images/pizza9.png';//InfoPizzas
import Burger2 from '../assets/images/burger2.jpg';//InfoBurgers
import Burger3 from '../assets/images/burger3.png';//InfoBurgers
import Burger4 from '../assets/images/burger4.jpg';//InfoBurgers
import Burger5 from '../assets/images/burger5.jpg';//InfoBurgers
import Burger6 from '../assets/images/burger6.png';//InfoBurgers
import Chicken2 from '../assets/images/chicken2.png';//InfoPollos
import Chicken3 from '../assets/images/chicken3.png';//InfoPollos
import Chicken4 from '../assets/images/chicken4.png';//InfoPollos
import Chicken5 from '../assets/images/chicken5.png';//InfoPollos
import Chicken6 from '../assets/images/chicken6.png';//InfoPollos
import HotDog1 from '../assets/images/hotdog1.png';//InfoHotDogs
import HotDog2 from '../assets/images/hotdog2.png';//InfoHotDogs
import HotDog3 from '../assets/images/hotdog3.png';//InfoHotDogs
import HotDog4 from '../assets/images/hotdog4.png';//InfoHotDogs
import HotDog5 from '../assets/images/hotdog5.png';//InfoHotDogs
import HotDog6 from '../assets/images/hotdog6.png';//InfoHotDogs
import Dessert1 from '../assets/images/dessert1.png';//InfoDesserts
import Dessert2 from '../assets/images/dessert2.png';//InfoDesserts
import Dessert3 from '../assets/images/dessert3.png';//InfoDesserts
import Dessert4 from '../assets/images/dessert4.png';//InfoDesserts
import Dessert5 from '../assets/images/dessert5.png';//InfoDesserts
import Promo2 from '../assets/images/promo2.png';//InfoDesserts


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
                <Container>
                    <Row>
                        <Col sm>
                            <Image fluid id="imgPromo"src={Promo2}></Image>
                        </Col>
                    </Row>
                </Container>
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
                                    <Card.Title>Tazón con 10 piezas de pollo</Card.Title>
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
                        <Col sm={{offset:3}} >
                            <h1>Ñam Ñam Pizzas para ti</h1>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container className="justify-content-center">
                    <Row>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Pizza4} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Familiar de Queso</Card.Title>
                                    <Card.Text>
                                        Sólo queso en esta pizza para compartir con muchas personas.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Pizza5} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Vegetariana</Card.Title>
                                    <Card.Text>
                                       Una combinación de ricos ingredientes que harán que tu estómago agradezca.
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Pizza6} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Individual Peperoni</Card.Title>
                                    <Card.Text>
                                        No te preocupes si estás solo y quieres comer algo. Esta pizza es ideal para ti.
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
                                <Image src={Pizza7} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Individual de Queso</Card.Title>
                                    <Card.Text>
                                        No te preocupes si estás solo y quieres comer algo. Esta pizza con un solo ingrediente de queso es ideal para ti.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Pizza8} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Familiar de Peperoni con orillas rellenas de Queso</Card.Title>
                                    <Card.Text>
                                        La perfecta Pizza Familiar para compartir con las orillas relleneas de queso ideales para satisfacer hasta el hambre de un elefante.
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Pizza9} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Familiar Hawaiana</Card.Title>
                                    <Card.Text>
                                       Una receta muy peculiar para esta pizza pero perfecta para compartir con todos
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
                <br/>
                <hr/>
                <Container id="mainTitle">
                    <Row>
                        <Col sm={{offset:3}}>
                            <h1>Ñam Ñam Burgesas para ti</h1>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container className="justify-content-center">
                    <Row>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Burger2} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Combo Hamburgesa</Card.Title>
                                    <Card.Text>
                                        ¿Insatisfecho? Creo que una hamburgesa con papas es lo tuyo.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Burger3} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Bacon Burger</Card.Title>
                                    <Card.Text>
                                       Tocino, carne de res y ensalada (lechuga y tomate) ideales para el hambre
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Burger4} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Bacon Chicken Burger</Card.Title>
                                    <Card.Text>
                                        Tocino, carne de pollo y ensalada (lechuga y tomate) ideales para el hambre. ¿Ya mencioné que es carne de pollo?
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
                                <Image src={Burger5} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Bacon Burger Especial</Card.Title>
                                    <Card.Text>
                                        Tocino, carne de res y ensalada (lechuga y tomate) ideales para el hambre con una receta muy Ñam Ñam, ¿Deseas conocerla?
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Burger6} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Hamburgesa Especial de Pollo</Card.Title>
                                    <Card.Text>
                                        Sencilla pero exquisita hamburgesa de pollo y ensalada(lechuga, y Jitomate).                                
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
                                       La deseada por todas con lo que buscas en una receta especial para ti
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
class InfoChickens extends Component {
    render() {
        return (
            <>
                <br/>
                <hr/>
                <Container id="mainTitle">
                    <Row>
                        <Col sm={{offset:3}}>
                            <h1>Ñam Ñam Pollos para ti</h1>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container className="justify-content-center">
                    <Row>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Chicken2} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Alitas o boneless Barbecue en pack</Card.Title>
                                    <Card.Text>
                                        ¿Sólo y sin pollo? Este pack de alitas barbecue te gustarán si no es así puedes escoger boneless en su lugar
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Chicken3} fluid></Image>
                                <Card.Body>
                                    <Card.Title>6 Piezas de pollo</Card.Title>
                                    <Card.Text>
                                       Pack de piezas de pollo que podrás disfrutar en compañia, o si lo deseas sólo.
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Chicken4} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pollo Rostizado</Card.Title>
                                    <Card.Text>
                                        Pollo entero perfecto para satisfacer el hambre con receta especial.
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
                                <Image src={Chicken1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Tazón con 10 piezas de pollo</Card.Title>
                                    <Card.Text>
                                        Este paquete es buenísimo para todos los integrantes de la familia. Disfruta de 10 piezas de pollo al estilo clásico.
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Chicken5} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Paquete Especial con arroz, pan, esalada y puré</Card.Title>
                                    <Card.Text>
                                        ¿En familia y no sabes qué comer? este pack con todo te hará satisfacer el hambre.                      
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Chicken6} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pack 9 piezas de pollo</Card.Title>
                                    <Card.Text>
                                       Ideal para los amantes del pollo frito con una receta Ñam Ñam especial.
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
class InfoHotDogs extends Component {
    render() {
        return (
            <>
                <br/>
                <hr/>
                <Container id="mainTitle">
                    <Row>
                        <Col sm={{offset:3}}>
                            <h1>Ñam Ñam Dogos para ti</h1>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container className="justify-content-center">
                    <Row>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={HotDog1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Hot Dog Sencillo</Card.Title>
                                    <Card.Text>
                                        Perfecto para mataer el hambre, salchicha Ñam Ñam y mostaza (O sin moztaza)
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={HotDog2} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pack 2 HotDogs, papas y refresco</Card.Title>
                                    <Card.Text>
                                       Todo en un sólo pack perfecto para disfrutar solo o acompañado   
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={HotDog3} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Bacon HotDog</Card.Title>
                                    <Card.Text>
                                        Tocino y hotdog la perfecta combinación para satisfacer el hambre
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
                                <Image src={HotDog4} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Hot dog Especial</Card.Title>
                                    <Card.Text>
                                        No sabras el misterio de este hot dog adorado por los dioses hasta que lo pruebes
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={HotDog5} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Hot dog medium</Card.Title>
                                    <Card.Text>
                                        Distintos ingredientes hacen la combinación perfecta de este hot dog                               
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={HotDog6} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Double Bacon Hot Dog</Card.Title>
                                    <Card.Text>
                                       Doble salchicha combinada con bacon lo hace el hot dog perfecto
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
class InfoDesserts extends Component {
    render() {
        return (
            <>
                <br/>
                <hr/>
                <Container id="mainTitle">
                    <Row>
                        <Col sm={{offset:3}}>
                            <h1>Ñam Ñam Postres para ti</h1>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container className="justify-content-center">
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
                                <Image src={Dessert2} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pack de 4 Muffins Combinados</Card.Title>
                                    <Card.Text>
                                       Ordénalos a tu gusto de acuerdoa a su sabor, increible para compartir o estando solo si así lo prefieres
                                </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Dessert3} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Rebanada de pastel de Fresa y Moras</Card.Title>
                                    <Card.Text>
                                        Dos ingredientes que hacen a una rebanada de pastel irresistible de comer
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
                                <Image src={Dessert4} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pack de Encanelados</Card.Title>
                                    <Card.Text>
                                       Ideal para después de la comida unos encanelados con receta dulce especial
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Dessert5} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pack de donas al gusto</Card.Title>
                                    <Card.Text>
                                        Tu escoges las donas a tu gusto y nosotros las llevamos. Muchos sabores una sola orden                          
                                    </Card.Text>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Image src={Dessert1} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pay de limón</Card.Title>
                                    <Card.Text>
                                        El mejor postre que haya existido jamás y que mejor probarlo desde Food2Go
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
export default FoodNavBar;