import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Container, Col, Button, Image } from 'react-bootstrap';

import Cake1 from '../assets/images/cake1.png';
import Dessert1 from '../assets/images/dessert1.png';
import Dessert2 from '../assets/images/dessert2.png';
import Dessert3 from '../assets/images/dessert3.png';
import Dessert4 from '../assets/images/dessert4.png';
import Dessert5 from '../assets/images/dessert5.png';

class InfoDesserts extends Component {
    constructor() {
        super();

        this.state = {
            postreuno: 7,
            postredos: 8,
            postretres: 9,
            postrecuatro: 10,
            postrecinco: 11,
            postreseis: 12,
        }
    }

    render() {
        return (
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
                                    <Link to={`/info/${this.state.postreuno}`}>
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                <Link to={`/info/${this.state.postredos}`}>
                                    <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                </Link>
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
                                    <Link to={`/info/${this.state.postretres}`}>
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
                                <Image src={Dessert4} fluid></Image>
                                <Card.Body>
                                    <Card.Title>Pack de Encanelados</Card.Title>
                                    <Card.Text>
                                        Ideal para después de la comida unos encanelados con receta dulce especial
                                    </Card.Text>
                                    <Link to={`/info/${this.state.postrecuatro}`}>
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                    <Link to={`/info/${this.state.postrecinco}`}>
                                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                                    </Link>
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
                                    <Link to={`/info/${this.state.postreseis}`}>
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

export default InfoDesserts;