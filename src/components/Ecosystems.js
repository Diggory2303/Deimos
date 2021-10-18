import React from 'react'
import {Container, Row, Col ,Image, Stack} from 'react-bootstrap';
import BNB from '../assets/BNB.png';
import BTC from '../assets/BTC.png';
import COSMOS from '../assets/COSMOS.png';
import DOT from '../assets/DOT.png';
import ETH from '../assets/ETH.png';
import KSM from '../assets/KSM.png';
import MATIC from '../assets/MATIC.png';
import SOL from '../assets/SOL.png';

export const Ecosystems = () => {
    return (
        <Container fluid>
            <Row className="eco-logos">
                    <Col xs={16} sm={16} md={1} lg={1} xl={1}>
                            <Image src={BTC} rounded />
                        </Col>
                        <Col xs={16} sm={16} md={1} lg={1} xl={1}>
                            <Image src={ETH} rounded />
                        </Col>
                        <Col xs={16} sm={16} md={1} lg={1} xl={1}>
                            <Image src={SOL}rounded />
                        </Col>
                        <Col xs={16} sm={16} md={1} lg={1} xl={1}>
                            <Image src={DOT} rounded />
                        </Col>
                        <Col xs={16} sm={16} md={1} lg={1} xl={1}>
                            <Image src={BNB} rounded />
                        </Col>
                        <Col xs={16} sm={16} md={1} lg={1} xl={1}>
                            <Image src={MATIC} rounded />
                        </Col>
                        <Col xs={16} sm={16} md={1} lg={1} xl={1}>
                            <Image src={COSMOS} rounded />
                        </Col>
                        <Col xs={16} sm={16} md={1} lg={1} xl={1}>
                            <Image src={KSM} rounded />
                        </Col>
                </Row>
        </Container>
    )
}

