import React,{ Component }  from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { getToken } from '../routes/validate_login';

const url = 'http://127.0.0.1:8000/storage/'

class ProductData extends Component {
    constructor() {
        super();
        
        this.state = {
            productos: [],
            quantity: '',
        }
 
    }
    
    delete() {

        let formData = new FormData();
        formData.append('product_id', this.props.producto.id)

        axios.post('http://localhost:8000/api/auth/cart/delete-product', formData, {
            headers: {
                'Authorization' : `Bearer ${getToken()}`
            }
        })
        .then(response => {
            console.log(response);
            window.location.reload(true);
            console.log("Producto eliminado");
        })
    }

    render(){
        return(
            <div>
                <div className="mx-4">
                    <hr/>
                </div>
                <Row className="content_product mx-4 py-2">
                    <Col className="info_product">
                        <Row>
                            <Col xs lg="8">
                                <Row>
                                    <Col xs lg="3" className="content_img">
                                        <Image className="image_product" src={url+this.props.producto.image} rounded />
                                    </Col>
                                    <Col xs lg="" className="content_info">
                                        <div>
                                            <h6>{this.props.producto.name}</h6>
                                            <p className="type_product">{this.props.producto.type_product}</p>
                                            <p className="description">{this.props.producto.description}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="delete">
                                <Button className="btn_delete" onClick={()=>this.delete()}>
                                        Eliminar
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs lg="1" className="center_text center_item">
                        <b>$ {this.props.producto.price}</b>
                    </Col>
                    <Col xs lg="2" className="center_text center_item_self pl-5">    
                        <b> {this.props.producto.pivot.quantity} </b>
                    </Col>
                    <Col xs lg="1" className="center_text center_item pr-0">
                        <b>$ {this.props.producto.pivot.quantity * this.props.producto.price}</b>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ProductData;