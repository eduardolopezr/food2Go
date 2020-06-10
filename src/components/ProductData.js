import React,{ Component }  from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import Producto from'../assets/images/pizza2.png'


class ProductData extends Component{
    render(){
        return(
            <div>
                {/* Datos producto agregado */}
                <div className="mx-4">
                    <hr/>
                </div>
                <Row className="content_product mx-4 py-2">
                    <Col className="info_product">
                        <Row>
                            <Col xs lg="8">
                                <Row>
                                    <Col xs lg="3" className="content_img">
                                        <Image className="image_product" src={Producto} rounded />
                                    </Col>
                                    <Col xs lg="" className="content_info">
                                        <div>
                                            <h6>Nombre del Producto</h6>
                                            <p className="type_product">Tipo de Producto</p>
                                            <p className="description">Ea adipisicing nisi. Veniam eiusmod consectetur id proident pariatur.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="delete">
                                <Button className="btn_delete">Eliminar</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs lg="1" className="center_text center_item">
                        <b>$ 00.00</b>
                    </Col>
                    <Col xs lg="2" className="center_text center_item_self pl-5">
                        <form>
                            <input type="number" min="1" max="100" step="1" placeholder="2"/>
                        </form>
                    </Col>
                    <Col xs lg="1" className="center_text center_item pr-0">
                        <b>$ 00.00</b>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ProductData;