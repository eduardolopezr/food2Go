import React,{Component} from 'react';
import { Card, Row, Container, Col, Button, Image } from 'react-bootstrap';

import Cake1 from '../assets/images/cake1.png';
import Dessert1 from '../assets/images/dessert1.png';//InfoDesserts
import Dessert2 from '../assets/images/dessert2.png';//InfoDesserts
import Dessert3 from '../assets/images/dessert3.png';//InfoDesserts
import Dessert4 from '../assets/images/dessert4.png';//InfoDesserts
import Dessert5 from '../assets/images/dessert5.png';//InfoDesserts

const InfoDesserts = () => (
    <div>
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
    </div>
);

export default InfoDesserts;