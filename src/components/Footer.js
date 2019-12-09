import React from 'react';
import { Jumbotron as Jumbo, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

import logo from '../assets/navBar/logo_grey.svg';

const Styles = styled.div`
    h1 {
        font-size: 1.0em;
        padding-bottom: 0.5em;
    }

    .link-text {
        color: #666A72;

        &:hover {
            color: #FFFFFF;
        }
    }

    h1 {
        color: #F2D4CD;
    }

    .footer-jumbo {
        background-color: #262626;
    }

    .icon {
        color: #666A72;
        margin-right: 0.5em;

        &:hover {
            color: #FFFFFF;
            cursor: pointer;
        }
    }

    .hyperlink-text {
        color: #FFFFFF;
        font-weight: 600;
        font-size: 0.9em;

        &:hover {
            color: #F2D4CD;
        }
    }
`

class Footer extends React.Component {
    handleLinkClick = () => {
        window.open('https://www.linkedin.com/in/joannacooper1/', "Joanna Cooper LinkedIn Profile");
    }

    render() {
        return(
            <Styles>
                <Jumbo fluid className="m-0 footer-jumbo">
                    <Row className="m-0">
                        <Col xs={{span:3, offset:1}}>
                            <Row>
                                <h1 className="title-line">QUICK LINKS</h1>
                            </Row>
                            <Row>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <p className="link-text">About</p>
                                </Link>
                            </Row>
                            <Row>
                                <Link
                                    activeClass="active"
                                    to="professional-projects"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <p className="link-text">Portfolio</p>
                                </Link>
                            </Row>
                            <Row>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <p className="link-text">Contact</p>
                                </Link>
                            </Row>
                        </Col>
                        <Col xs={{span:3, offset:1}}>
                            <Row>
                                <h1 className="title-line">PORTFOLIO</h1>
                            </Row>
                            <Row>
                                <Link
                                    activeClass="active"
                                    to="professional-projects"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <p className="link-text">Professional Projects</p>
                                </Link>
                            </Row>
                            <Row>
                                <Link
                                    activeClass="active"
                                    to="personal-projects"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    <p className="link-text">Personal Projects</p>
                                </Link>
                            </Row>
                        </Col>
                        <Col xs={{span:3, offset:1}}>
                            <Row>
                                <h1 className="title-line">FOLLOW ME</h1>
                            </Row>
                            <Row>
                                <FontAwesomeIcon 
                                    icon={['fab', 'linkedin']}
                                    size="2x" 
                                    className="icon" 
                                    onClick={() => this.handleLinkClick()}
                                />
                            </Row>                                           
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center align-items-center mt-4 mr-0 mb-0 ml-0">
                        <img
                            src={logo}
                            width="30"
                            height="auto"
                            className="mr-3"
                            alt="JC Portfolio Logo"
                        />
                        <p style={{color: '#666A72'}} className="m-0">JC Portfolio</p>
                    </Row>
                </Jumbo>
            </Styles>
        );
    }
}

export default Footer;