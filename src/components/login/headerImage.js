import React,{ Component }  from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import login from '../../assets/images/banner_login.jpg'

class HeaderImage extends Component {
    render(){
        return(
            <div className="header">
                <Row>
                    <Col className="content_img">
                        <div className="banner_login"></div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default HeaderImage;