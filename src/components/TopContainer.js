import React from 'react'
import './TopContainer.css';
import {Container, Row, Col ,Image, Stack} from 'react-bootstrap';
import BNB from '../assets/BNB.png';
import BTC from '../assets/BTC.png';
import COSMOS from '../assets/COSMOS.png';
import DOT from '../assets/DOT.png';
import ETH from '../assets/ETH.png';
import KSM from '../assets/KSM.png';
import MATIC from '../assets/MATIC.png';
import SOL from '../assets/SOL.png';
import DEIMOSCIRCULAR from '../assets/DEIMOSTITLE.png';
import DEIMOS from '../assets/DEIMOS CAPITAL-circular.png'
import { Ecosystems } from './Ecosystems';


export const TopContainer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Image className="logo-top" src={DEIMOSCIRCULAR} rounded/>
                </Row>
                <Row>
                    <Col> 
                        <h1 className="title"> <i className="potential">Free the possibilities</i> <i className="blockchain">of the blockchain techonology.</i></h1> 
                        <p className="message"> <i className="founders"> Assisting idealistic founders and helping companies grow.</i></p>
                    </Col>
                    <Col className="image-container">
                    <Image className="logo-circular" src={DEIMOS} rounded/>
                    </Col>
                </Row>
                <p className="ecosystems">FUNDING PROJECTS ACROSS ALL MAIN BLOCKCHAIN ECOSYSTEMS</p>
                <Ecosystems/>
            </Container>
        </div>
    )
}

