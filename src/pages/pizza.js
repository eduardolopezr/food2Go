import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Container, Col, Button, Image } from 'react-bootstrap';

import Pizza4 from '../assets/images/pizza4.png';//InfoPizzas
import Pizza5 from '../assets/images/pizza5.png';//InfoPizzas
import Pizza6 from '../assets/images/pizza6.png';//InfoPizzas
import Pizza7 from '../assets/images/pizza7.png';//InfoPizzas
import Pizza8 from '../assets/images/pizza8.png';//InfoPizzas
import Pizza9 from '../assets/images/pizza9.png';//InfoPizzas

class InfoPizzas extends Component {
    constructor() {
        super();

        this.state = {
            pizzauno: 1,
            pizzados: 2,
            pizzatres: 3,
            pizzacuatro: 4,
            pizzacinco: 5,
            pizzaseis: 6,
        }
    }
    
    render() {
        return (
            <div>
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
                                    <Link to={`/info/${this.state.pizzauno}`}>
                                        <Button variant="outline-danger">
                                            ¡Ordenar ahora!
                                        </Button>
                                    </Link>
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
                                    <Link to={`/info/${this.state.pizzados}`}>
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                    <Link to={`/info/${this.state.pizzatres}`}>
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
                                <Image src={Pizza7} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pizza Individual de Queso</Card.Title>
                                    <Card.Text>
                                        No te preocupes si estás solo y quieres comer algo. Esta pizza con un solo ingrediente de queso es ideal para ti.
                                    </Card.Text>
                                    <Link to={`/info/${this.state.pizzacuatro}`}>
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                    <Link to={`/info/${this.state.pizzacinco}`}>
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                    <Link to={`/info/${this.state.pizzaseis}`}>
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <hr/>
            </div>
        );
    }
}

export default InfoPizzas;