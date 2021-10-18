import React from 'react'
import './BottomContainer.css';
import {Container, Row, Col ,Image} from 'react-bootstrap';
import { Maps } from './Maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import DEIMOSCIRCULAR from '../assets/DEIMOSTITLE.png';


const clickMail = (e) => {
    e.preventDefault();
    const newWindow = window.open('mailto:contact@deimocapital.com', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
} 

const clickTelegram = (e) => {
    e.preventDefault();
    const newWindow = window.open('https://t.me/deimoscapital', '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


export const BottomContainer = () => {
    return (
        <div>
            <Container className="bg-bottom">
                <Row className="logo">
                <Image src={DEIMOSCIRCULAR} rounded/>
                </Row>
                <Row className="bottom">
                    <Col xs={16} sm={16} md={7} lg={7} xl={7}>
                        <Maps/>
                    </Col>
                    <Col xs={16} sm={16} md={5} lg={5} xl={5}>
                        <h4>GET IN TOUCH WITH US</h4>
                        <p>We’re always looking for new ideas, business, and partnership opportunities. Don't mind leaving your feedback, we learn a lot from it. If you’re submitting a business/marketing proposal, please include a clear description of it and attach any resources that could help us evaluate your opportunity and come up with a better solution.</p>
                        <br />
                        <p className="mail">contact@deimocapital.com</p>
                    </Col>
                </Row>
                <Row>
                    
                    <FontAwesomeIcon onClick={clickMail} icon={faEnvelope} size='4x'/>
                    <FontAwesomeIcon onClick={clickTelegram} icon={faTelegramPlane} size='4x'/>
                    
                    
                </Row>
            </Container>
        </div>
    )
}


