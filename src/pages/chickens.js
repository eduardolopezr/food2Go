import React,{Component} from 'react';
import { Card, Button, Image, Col, Row, Container } from 'react-bootstrap';

import Chicken1 from '../assets/images/chicken1.png';
import Chicken2 from '../assets/images/chicken2.png';//InfoPollos
import Chicken3 from '../assets/images/chicken3.png';//InfoPollos
import Chicken4 from '../assets/images/chicken4.png';//InfoPollos
import Chicken5 from '../assets/images/chicken5.png';//InfoPollos
import Chicken6 from '../assets/images/chicken6.png';//InfoPollos

const InfoChickens = () => (
    <div>
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
    </div>
)

export default InfoChickens;