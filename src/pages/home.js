import axios from 'axios';
import React,{Component} from 'react';
import { Row, Container, Col, Image, CardColumns } from 'react-bootstrap';

import Cards from '../components/cardAllProducts';
import Promo2 from '../assets/images/promo2.png';

class home extends Component{
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
            console.log(productos);
            this.setState({ productos });
          })
    } 

    render() {

        let rows = [];

        if (this.state.productos != null) {
            this.state.productos.forEach((product) => {
                rows.push(<Cards producto={product} key={product}/>)
            })
        } else {
            rows.push(<h1>Cargando</h1>)
        }

        return (
            <Container>
                <br/>
                <hr/>
                    <Row>
                        <Col sm>
                            <Image fluid id="imgPromo"src={Promo2}></Image>
                        </Col>
                    </Row>
                <br/>
                <hr/>
                <div id="mainTitle">
                    <Row>
                        <Col sm={{offset:3}}>
                            <h1>Lo más Ñam Ñam de Food2Go</h1>
                        </Col>
                    </Row>
                </div>
                <hr/>
                    
                    <CardColumns>
                        {/* Se pintan los datos del carrito */}
                        { rows }
                    </CardColumns>

                <br/>
                <hr/>
            </Container>
        );
    }
}

export default home;