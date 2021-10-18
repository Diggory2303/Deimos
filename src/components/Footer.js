import React from 'react'
import {Container, Row, Col ,Image} from 'react-bootstrap';

export const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p> Av. Paseo de la Reforma 505, Cuauhtémoc, Mexico City, Mexico</p>
                    </Col>
                    <Col>
                        <p>Copyright © 2021 Deimos Capital | All Rights Reserved.</p>
                    </Col>
                </Row> 
            </Container>
        </div>
    )
}
