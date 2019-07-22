import React from 'react';
import styled from 'styled-components';
import { HomeButton } from './navigationBar/HomeButton';
import { Jumbotron as Jumbo, Container, Row, Col } from 'react-bootstrap';

import urbanFutures_white_logo from '../assets/homePage/landingPage/urbanFutures_white_logo.svg';

const Styles = styled.div`
    .jumbo {
        background-size: cover;
        z-index: -2;
        display: block;
        margin-bottom: 0px;
        height: 100%;
        border-radius: 0;
    }

    .logo {
        margin-bottom: 5em;
        width: 12vw;
        height: auto;
    }

    @media all and (min-width: 1200px) { 
        .logo {
            width: 10vw;
        }
    }

    @media all and (max-width: 1020px) { 
        .logo {
            width: 15vw;
        }
    }

    @media all and (max-width: 992px) { 
        .logo {
            width: 20vw;
        }
    }

    @media all and (max-width: 576px) { 
        .logo {
            width: 30vw;
        }
    }
`

class TemplateHeader extends React.Component {
    render() {
        return(
            <Styles>
                <Container fluid className="p-0 m-0">            
                    <HomeButton />
                    <Jumbo className="jumbo background-color w-100 pl-0 pr-0" style={{backgroundImage:`url(${this.props.backgroundImage})`}}>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center mb-3 p-0">
                                    <img
                                        src={urbanFutures_white_logo}
                                        alt="Urban Futures Logo"
                                        className="logo"
                                    />
                                </Col>
                            </Row>
                            <Row className="d-flex align-content-bottom">
                                <Col xs={{span:10, offset:1}} lg={{span:7}}>
                                    <Row>
                                        <h1>{this.props.titleWhite}</h1>
                                    </Row>
                                    <Row>
                                        <h2 className="title-line">{this.props.titleGreen}</h2>
                                    </Row>
                                    <Row>
                                        <p>{this.props.titleDescription}</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Jumbo>
                </Container>
            </Styles>
            
        );
    }
}

export default TemplateHeader;