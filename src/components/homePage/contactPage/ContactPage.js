import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container, Col, Row } from 'react-bootstrap';
import Map from './ContactPage_Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import phone_icon from '../../../assets/homePage/contactPage/phone_icon.png';
import email_icon from '../../../assets/homePage/contactPage/email_icon.png';
import website_icon from '../../../assets/homePage/contactPage/website_icon.png';
import address_icon from '../../../assets/homePage/contactPage/address_icon.png';

const Styles = styled.div`
    .contact-text-margin {
        margin-top: 13px;
        margin-left: 1em;
    }

    .title-margin {
        margin-top: 4rem;
    }

    .map-container {
        height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .icon {
        color: #99B6AE;

        &:hover {
            color: #F2F2F2;
            cursor: pointer;
        }
    }

    @media all and (max-width: 1020px) {
        .contact-text-margin {
            margin-top: 7px;
        }

        .contact-icons {
            width: 30px;
            height: 30px;
        }
    }

    @media all and (max-width: 992px) {
        .map-container {
            height: 50vh;
        }

        .title-margin {
            margin-top: 0;
        }

        .contact-info-column {
            margin-top: 3rem;
            margin-bottom: 3rem;
        }
    }

    @media all and (max-width: 576px) {
        .map-container {
            margin-bottom: 3rem;
            height: 25vh;
        }
    }
`

class ContactPage extends React.Component {
    handleIconClick = (icon) => {
        if(icon === "facebook") {
            window.open('https://www.facebook.com/thecimslab', "Urban Futures Facebook");
        }else if(icon === "instagram") {
            window.open('https://www.instagram.com/thecimslab/', "Urban Futures Instagram");
        }else if(icon === "twitter") {
            window.open('https://twitter.com/thecimslab', "Urban Futures Twitter");
        }
        
    }

    render() {
        return(
            <Styles>
                <Jumbo fluid className="background-color d-flex m-0 p-0">
                    <Container fluid className="p-0">
                        <Col xs={{span:11, offset:1}}>
                            <Row className="d-flex align-items-center">
                                <Col xs={{span:11}} sm={{span:5}} className="contact-info-column">
                                    <Row>
                                        <Col>
                                            <Row className="title-margin">
                                                <h1>CONTACT</h1>
                                            </Row>
                                            <Row>
                                                <h2 className="title-line">INFORMATION</h2>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="mt-5 mb-5">
                                        <Col>
                                            <Row className="mb-2">
                                                <img
                                                    src={phone_icon}
                                                    width="48px"
                                                    height="48px"
                                                    alt="Phone Icon"
                                                    className="contact-icons"
                                                />
                                                <p className="contact-text-margin">(613)-520-2600</p>
                                            </Row>
                                            <Row className="mb-2">
                                                <img    
                                                    src={email_icon}
                                                    width="48px"
                                                    height="48px"
                                                    alt="Email Icon"
                                                    className="contact-icons"
                                                />
                                                <p className="contact-text-margin">info@cims.carleton.ca</p>
                                            </Row>
                                            <Row className="mb-2">
                                                <img
                                                    src={website_icon}
                                                    width="48px"
                                                    height="48px"
                                                    alt="Website Icon"
                                                    className="contact-icons"
                                                />
                                                <p className="contact-text-margin">http://cims.carleton.ca</p>
                                            </Row>
                                            <Row className="mb-2">
                                                <img
                                                    src={address_icon}
                                                    width="48px"
                                                    height="48px"
                                                    alt="Address Icon"
                                                    className="contact-icons"
                                                />
                                                <p className="contact-text-margin">
                                                    Carleton Immersive Media Studio<br />
                                                    Carleton University<br />
                                                    Virtual & Simulation Building, 4<sup>th</sup> Floor,<br />
                                                    1125 Colonel By Drive<br />
                                                    Ottawa, ON, K1S 5B6         
                                                </p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <FontAwesomeIcon icon={['fab', 'facebook']} mask={['circle']} size="2x" className="icon 2x" onClick={() => this.handleIconClick("facebook")} />
                                        <FontAwesomeIcon icon={['fab', 'instagram']} mask={['circle']} size="2x" className="ml-5 icon 2x" onClick={() => this.handleIconClick("instagram")} />
                                        <FontAwesomeIcon icon={['fab', 'twitter']} mask={['circle']} size="2x" className="ml-5 icon 2x" onClick={() => this.handleIconClick("twitter")} />
                                    </Row>
                                </Col>
                                <Col xs={{span:11}} sm={{span:7}} className="p-0 m-0">
                                    <Row className="map-container">
                                        <Map />
                                    </Row>
                                </Col>
                            </Row>
                        </Col>                       
                    </Container>
                </Jumbo>
            </Styles>
        );
    }
}

export default ContactPage;