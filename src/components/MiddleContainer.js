import React from 'react'
import { Link } from 'react-router-dom';
import './MiddleContainer.css';
import {Container, Row, Col ,Image, Card, CardImg} from 'react-bootstrap';
import BLOKTOPIA from "../assets/BLOKTOPIA.jpeg";
import QUICKSWAP from "../assets/QUICKSWAP.jpg";
import GAMESTARTER from "../assets/GAMESTARTER.png";
import BUTTERFLY from "../assets/BUTTERFLY.jpg"
import DEUS from "../assets/DEUS.jpg"
import ERN from "../assets/ERN.jpg"

const clickBloktopia = (e) => {
    e.preventDefault();
    const newWindow = window.open('https://www.bloktopia.com/', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const clickQuickSwap = (e) => {
    e.preventDefault();
    const newWindow = window.open('https://quickswap.exchange/#/swap', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const clickGameStarter = (e) => {
    e.preventDefault();
    const newWindow = window.open('https://www.gamestarter.com/', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const clickButterfly = (e) => {
    e.preventDefault();
    const newWindow = window.open('https://www.butterflyprotocol.io/', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const clickDeus = (e) => {
    e.preventDefault();
    const newWindow = window.open('https://deus.finance/', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const clickEthernity = (e) => {
    e.preventDefault();
    const newWindow = window.open('https://ethernity.io/marketplace?category=&page=1&sort=latest&type=', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


export const MiddleContainer = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <h3 className="partners">Our partners</h3>
                </Row>
                <Row className="first-row">
                    
                    <Col xs={16} sm={16} md={4} lg={4} xl={4}>
                        <Card  onClick={clickBloktopia} className="card" >
                            <CardImg src={BLOKTOPIA} alt="Bloktopia"/>
                        </Card>
                    </Col>
                    <Col xs={16} sm={16} md={4} lg={4} xl={4}>
                        <Card onClick={clickQuickSwap} className="card" border="Dark" >
                            <CardImg src={QUICKSWAP} alt="Quickswap"/>
                        </Card>
                    </Col>
                    <Col xs={16} sm={16} md={4} lg={4} xl={4}>
                        <Card onClick={clickGameStarter}  className="card" >
                            <CardImg src={GAMESTARTER} alt="Gamestarter"/>
                        </Card>
                    </Col>
                </Row>
                <Row className="second-row">
                    <Col xs={16} sm={16} md={4} lg={4} xl={4}>
                        <Card onClick={clickButterfly} className="card" >
                            <CardImg src={BUTTERFLY} alt="Butterfly"/>
                        </Card>
                    </Col>
                    <Col xs={16} sm={16} md={4} lg={4} xl={4}>
                        <Card onClick={clickDeus} className="card" >
                            <CardImg src={DEUS} alt="Deus"/>
                        </Card>
                    </Col>
                    <Col xs={16} sm={16} md={4} lg={4} xl={4}>
                        <Card onClick={clickEthernity} className="card">
                            <CardImg src={ERN} alt="Ethernity Chain"/>
                        </Card>
                    </Col>
                </Row>
                <Row className="message">
                 We want to make clear that, any investments or portfolio companies mentioned, referred to, or described on this page are not representative of all investments in vehicles managed by Deimos Capital and there can be no assurance that the investments will be profitable or that other investments made in the future will have similar characteristics or results. Results include existing and former companies in Deimos Capital's portfolio that have been acquired, as well as companies that have made initial public offerings or direct public offerings. Some companies listed on this list may still have Deimos funds. Also, the investment list is updated monthly, so it may not reflect recent Deimos investments. Deimos Capital's past investment results, joint investment vehicles, or investment strategies do not necessarily represent future results.  
                </Row>
            </Container>
        </div>
    )
}
