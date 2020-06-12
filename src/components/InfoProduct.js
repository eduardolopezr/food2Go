import React,{ Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { faStar, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';
import '../assets/css/infoProduct.scss';
import { Link } from 'react-router-dom';

const url = 'http://127.0.0.1:8000/storage/'

class InfoProduct extends Component{
    constructor() {
        super();
        
        this.state = {
            productos: [],
            type: '',
        }
        console.log(this.state.pizza);
        
    }
    
    componentDidMount() {
        
        const { match } = this.props;
        
        axios.get(`http://localhost:8000/api/products/${match.params.pizzaId}`)
        .then(res => {
            const productos = res.data;
            console.log(productos);
            this.setState({ productos });
            
            const type = productos.type_products.type;
            console.log(type);
            this.setState({ type });
        })
    } 
    
    render(){
        return(
            <Container className="container">
                <button href="" onClick={() => this.props.history.goBack()}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} size="3x" className="arrow_back"/>
                </button >
                <Row className="center_content">
                    <Col xs={6} md={4} lg="5" className="image center_items">
                        <Image className="image_product" src={url+this.state.productos.image} rounded />
                    </Col>
                    <Col xs lg="5" className="header_info">
                        <div>
                            <h2> {this.state.type} {this.state.productos.name}</h2>
                            <p className="precio">$<u>{this.state.productos.price}</u></p>
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                                <FontAwesomeIcon icon={faStar} className="icon"/>
                            </div>
                            <div className="mt-3">
                                <p>{this.state.productos.description}</p>
                            </div>
                            <div className="py-3">
                                <Row >
                                    <Col>
                                        <h6>Cantidad: </h6>
                                        <div className="quantity">
                                            <input type="number" name="quantity" id="quantity" min="1" max="100" step="1" placeholder="1"/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col>
                                        <Link>
                                            <Button className="btn_buy" type="submit">Comprar Ahora</Button>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to="/shopping_cart">
                                            <Button className="btn_add" type="submit">Agregar al Carrito</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default InfoProduct;