import React,{ Component }  from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Image } from 'react-bootstrap';

const url = 'http://127.0.0.1:8000/storage/'

class cardProduct extends Component {
    render(){
        return(
            <Card style={{ width: '22rem', margin: '0 0 2rem 0', }}>
                <Image style={{ padding: '30px'}} src={url+this.props.producto.image} fluid></Image>
                <Card.Body>
                    <Card.Title> {this.props.producto.name} </Card.Title>
                    <Card.Text>
                        {this.props.producto.description}
                    </Card.Text>
                    <Link to="/productos/">
                        <Button variant="outline-danger">¡Ordenar ahora!</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}
export default cardProduct;