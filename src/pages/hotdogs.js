import React,{Component} from 'react';
import { Card, Row, Container, Col, Button, Image } from 'react-bootstrap';

import HotDog1 from '../assets/images/hotdog1.png';//InfoHotDogs
import HotDog2 from '../assets/images/hotdog2.png';//InfoHotDogs
import HotDog3 from '../assets/images/hotdog3.png';//InfoHotDogs
import HotDog4 from '../assets/images/hotdog4.png';//InfoHotDogs
import HotDog5 from '../assets/images/hotdog5.png';//InfoHotDogs
import HotDog6 from '../assets/images/hotdog6.png';//InfoHotDogs

const InfoHotDogs = () => (
    <div>
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
    </div>
);

export default InfoHotDogs;