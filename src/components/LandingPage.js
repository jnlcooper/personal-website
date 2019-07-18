import React from 'react';
import { Jumbotron as Jumbo, Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import carletonImage from '../assets/carletonCampus_lineDrawing.png';
import urbanFutures_white_logo from '../assets/urbanFutures_white_logo.png'

const Styles = styled.div`
    .jumbo {
        background: url(${carletonImage}) no-repeat  bottom;
        background-size: cover;
        background-color: #0E0E0E;
    }

    .title-text {
        margin-top: 50vh;
        margin-bottom:auto;
    }

    /*.title-line {
        letter-spacing: -2px;
        color: #99B6AE;
        font-size: 3em;
        margin: 0;
        line-height: 0;
    }*/
`;

export const LandingPage = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <Container >
                <Row>
                    <Col className="d-flex justify-content-center">
                        <img
                            src={urbanFutures_white_logo}
                            width="153"
                            height="auto"
                            alt="Urban Futures Logo"
                        />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="title-text">    
                <Row>
                    <Col md={{span:6, offset:1}} xs={{span:10, offset:1}}>
                        <div>
                            <h1 >LOREM</h1>
                            <h2  className="title-line">IPSUM DOLOR</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ante eu quam blandit sodales. Curabitur iaculis mauris sem, at semper mauris facilisis id.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbo>
    </Styles>
)