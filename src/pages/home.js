import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Container, Col, Button, Image } from 'react-bootstrap';

import Pizzaa2 from '../assets/images/pizzaa2.png';
import Pizza3 from '../assets/images/pizza3.png';
import Burger1 from '../assets/images/burger1.png';
import Chicken1 from '../assets/images/chicken1.png';
import Cake1 from '../assets/images/cake1.png';
import Tacos1 from '../assets/images/tacos1.png';

import Promo2 from '../assets/images/promo2.png';

class home extends Component{
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
                                    <Link to="/productos/pizzas">
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                    <Link to="productos/burgers">
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                    <Link to="productos/chickens">
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                    <Link to="productos/desserts">
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                    <Link to="productos/pizzas">
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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

export default home;