import React,{Component} from 'react';
import { Card, Button, Image, Col, Row, Container } from 'react-bootstrap';

import Burger1 from '../assets/images/burger1.png';
import Burger2 from '../assets/images/burger2.jpg';//InfoBurgers
import Burger3 from '../assets/images/burger3.png';//InfoBurgers
import Burger4 from '../assets/images/burger4.jpg';//InfoBurgers
import Burger5 from '../assets/images/burger5.jpg';//InfoBurgers
import Burger6 from '../assets/images/burger6.png';//InfoBurgers

const InfoBurgers = () => (
    <div>
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
    </div>
)

export default InfoBurgers;