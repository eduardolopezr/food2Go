import React,{ Component }  from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import '../assets/css/listcart.scss';
import Product from './ProductData';

class ListCart extends Component{
    render(){
        return(
            <Container className="container">
                <Row className="header_cart mx-2">
                    <Col>Detalles del Producto</Col>
                    <Col xs lg="1" className="center_text">Precio</Col>
                    <Col xs lg="2" className="center_text">Cantidad</Col>
                    <Col xs lg="1" className="center_text">Total</Col>
                </Row>
                
                <Product />
                <Product />
                <Product />
                <Product />

                <Row className="my-5 mx-2 content_order float">
                    <div className="col_dech">
                    <Col>
                        <h3 className="center_text">Resumen del pedido</h3>
                        <hr/>
                        <Row className="center">
                            <Col xs lg="3">
                                <p>Subtotal: </p>
                            </Col>
                            <Col xs lg="3" className="text_right">
                                <p>$ 00.00</p>
                            </Col>
                        </Row>
                        <Row className="center">
                            <Col xs lg="3">
                                <p>Envío: </p>
                            </Col>
                            <Col xs lg="3" className="text_right">
                                <p>$ 00.00</p>
                            </Col>
                        </Row>
                        <Row className="center">
                            <Col xs lg="3">
                                <p>Descuentos: </p>
                            </Col>
                            <Col xs lg="3" className="text_right">
                                <p>$ 00.00</p>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="center">
                            <Col  xs lg="3">
                                <h4>Total</h4>
                            </Col>
                            <Col xs lg="3" className="text_right">
                                <p>$ 00.00</p>
                            </Col>
                        </Row>
                    </Col>
                    <Row className="content_btn">
                        <Col className="btn">
                            <Button className="btn_buy">Comprar</Button>
                        </Col>
                    </Row>
                    </div>
                </Row>
            </Container>
        );
    }
}
export default ListCart;