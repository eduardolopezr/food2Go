import React,{ Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { faStar, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';
import Producto from '../assets/images/pizza1.jpg'
import '../assets/css/infoProduct.scss';

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
                        <Image className="image_product" src={Producto} rounded />
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