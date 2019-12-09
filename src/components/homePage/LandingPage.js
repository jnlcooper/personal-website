import React from 'react';
import { Jumbotron as Jumbo, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        background-color: #FFFFFF;
    }

    .landing-heading {
        font-size: 4em;
    }    

    .landing-subheading {
        font-size: 3em;
    }
`;

export const LandingPage = () => (
    <Styles>
        <Jumbo fluid className="jumbo vh-100 m-0 d-flex align-items-center">
            <Col xs={{span:5, offset:1}}>
                <Row>
                    <h1 className="landing-heading">JOANNA COOPER</h1>
                </Row>
                <Row>
                    <h2 className="landing-subheading">PORTFOLIO</h2>
                </Row>
                <Row className="mt-5">
                    <h4>WEB DEVELOPER - UI/UX DESIGNER - MULTIMEDIA DESIGNER</h4>
                </Row>
            </Col>       
        </Jumbo>
    </Styles>
);