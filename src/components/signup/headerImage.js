import React,{ Component }  from 'react';
import { Row, Col } from 'react-bootstrap';

class HeaderImage extends Component {
    render(){
        return(
            <div className="header">
                <Row>
                    <Col className="content_img">
                        <div className="banner_signup"></div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default HeaderImage;