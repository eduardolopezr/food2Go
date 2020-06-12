import React, { Component } from 'react';
import { Col, Row, Container, CardColumns } from 'react-bootstrap';

import axios from 'axios'; 
import Cards from '../components/cardProduct';

class InfoChickens extends Component {
    constructor() {
        super();

        this.state = {
            productos: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/products`)
          .then(res => {
            const productos = res.data;
            
            this.setState({ productos });
        })
    }

    render() {

        let rows = [];
        
        if (this.state.productos != null) {
            this.state.productos.forEach((product) => {
                if(product.type_products_id === 8) {
                    rows.push(<Cards producto={product} key={product.id}/>)
                }
            })
        } else {
            rows.push(<h1>Cargando</h1>)
        }

        return (
            <div>
                <br/>
                <hr/>
                <Container id="mainTitle">
                    <Row>
                        <Col sm={{offset:3}}>
                            <h1>Ñam Ñam Pollos para ti</h1>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container className="justify-content-center">
                    <CardColumns>
                        {/* Se pintan los datos del carrito */}
                        { rows }
                    </CardColumns>
                </Container>
                <br/>
                <hr/>
            </div>
        );
    }
}

export default InfoChickens;