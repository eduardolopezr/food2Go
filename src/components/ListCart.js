import React,{ Component }  from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import axios from 'axios';
import '../assets/css/listcart.scss';
import Product from './ProductData';
import { getToken } from '../routes/validate_login';
import { Link } from 'react-router-dom';

class ListCart extends Component{
    constructor() {
        super();

        this.state = {
            productos: [],
            precios: [],
        }
    }

    componentDidMount() {
        axios.post('http://localhost:8000/api/auth/cart/list-products', {}, {
            headers: {
                'Authorization' : `Bearer ${getToken()}`
            }
        })
        .then(response => {
            const productos = response.data;
            console.log(productos);
            this.setState({ productos });
            console.log("Enlistando");
        })
    } 

    buy() {
        axios.post('http://localhost:8000/api/auth/orders/create', {}, {
            headers: {
                'Authorization' : `Bearer ${getToken()}`
            }
        })
        .then(response => {
            console.log(response.data);
        })
    }

    render(){

        let rows = [];
        let price = [];
        let qty = [];
        let totalF = 0;
        
        if (this.state.productos != null) {
            this.state.productos.forEach((product) => {
                rows.push(<Product producto={product} key={product.id}/>)
                price.push((product.price))
                qty.push((product.pivot.quantity))
            })
        } else {
            rows.push(<h1>Cargando</h1>)
        }

        for (let i = 0; i < rows.length; i++) {
            totalF += price[i] * qty[i]
        }
        

        return(
            <Container className="container mt-5">
                <div className="mt-2 mb-4 mx-4">
                    <h2>
                        Tu carrito de compras
                    </h2>
                </div>
                <Row className="header_cart mx-2">
                    <Col>Detalles del Producto</Col>
                    <Col xs lg="1" className="center_text">Precio</Col>
                    <Col xs lg="2" className="center_text">Cantidad</Col>
                    <Col xs lg="1" className="center_text">Total</Col>
                </Row>
                
                <div>
                    {/* Se pintan los datos del carrito */}
                    { rows }
                </div>
                <Row className="my-5 mx-2 content_order float">
                {/* <Row> */}
                    <Col className="content_btn_izq">
                        <Col className="btn_izq">
                            <Link to="/" className="btn_buy">
                                Seguir Comprando
                            </Link>
                        </Col>
                    </Col>
                {/* </Row> */}
                
                    <div className="col_dech">
                        
                        <Col>
                            <h3 className="center_text">Resumen del pedido</h3>
                            <hr/>
                            <Row className="center">
                                <Col xs lg="3">
                                    <p>Subtotal: </p>
                                </Col>
                                <Col xs lg="3" className="text_right">
                                    <p>$ { totalF }</p>
                                </Col>
                            </Row>
                            <Row className="center">
                                <Col xs lg="3">
                                    <p>Envío: </p>
                                </Col>
                                <Col xs lg="3" className="text_right">
                                    <p>$ 20</p>
                                </Col>
                            </Row>
                            <Row className="center">
                                <Col xs lg="3">
                                    <p>Descuentos: </p>
                                </Col>
                                <Col xs lg="3" className="text_right">
                                    <p>$ 0.0</p>
                                </Col>
                            </Row>
                            <hr/>
                            <Row className="center">
                                <Col  xs lg="3">
                                    <h4>Total</h4>
                                </Col>
                                <Col xs lg="3" className="text_right">
                                    <p>$ { totalF === 0 ? "0" : totalF }</p>
                                </Col>
                            </Row>
                        </Col>
                        <Row className="content_btn">
                            <Col className="btn">
                                <Button className="btn_buy" onClick={()=>this.buy()}>Comprar</Button>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        );
    }
}
export default ListCart;