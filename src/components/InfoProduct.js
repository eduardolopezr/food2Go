import React,{ Component }  from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import Producto from '../assets/images/pizza1.jpg'
import '../assets/css/infoProduct.scss';

class InfoProduct extends Component{
    render(){
        return(
            <Container className="container">
                <a id="#show" href="#">
                    <FontAwesomeIcon icon={faLongArrowAltLeft} size="3x" className="arrow_back"/>
                    <span id="content">Back</span>
                </a>
                <Row className="center_content">
                    <Col xs={6} md={4} lg="5" className="image center_items">
                        <Image className="image_product" src={Producto} rounded />
                    </Col>
                    <Col xs lg="5" className="header_info">
                        <div >
                            <h2> Nombre del Producto </h2>
                            <p className="precio">$ <u>00.00</u></p>
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                            </div>
                            <div className="mt-3">
                                <p>Laborum amet proident proident fugiat mollit in incididunt cillum anim irure sint dolore. Tempor ad anim nisi amet sint et sit ullamco ad non anim.</p>
                            </div>
                            <Form className="py-3">
                                <Row >
                                    <Col className="select">
                                        <h6>Subtitle: </h6>
                                        <Form.Control as="select">
                                            <option>Default select</option>
                                            <option>Opcion 1</option>
                                        </Form.Control>
                                    </Col>
                                    <Col className="select">
                                        <h6>Subtitle: </h6>
                                        <Form.Control as="select">
                                            <option>Default select</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col className="select">
                                        <h6>Subtitle: </h6>
                                        <Form.Control as="select">
                                            <option>Default select</option>
                                        </Form.Control>
                                    </Col>
                                    <Col className="select">
                                        <h6>Subtitle: </h6>
                                        <Form.Control as="select">
                                            <option>Default select</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col>
                                        <Button className="btn_buy" as="input" type="submit" value="Buy Now" />
                                    </Col>
                                    <Col>
                                        <Button className="btn_add" as="input" type="submit" value="Add ot Car" />
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default InfoProduct;