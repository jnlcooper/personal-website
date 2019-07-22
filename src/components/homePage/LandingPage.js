import React from 'react';
import { Jumbotron as Jumbo, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-scroll';
import styled from 'styled-components';

/*LANDING PAGE IMAGES*/
import carletonImage from '../../assets/homePage/landingPage/carletonCampus_lineDrawing.png';
import urbanFutures_white_logo from '../../assets/homePage/landingPage/urbanFutures_white_logo.svg'
import arrow_down_icon from '../../assets/homePage/landingPage/arrow_down_icon.png'
import arrow_down_green_icon from '../../assets/homePage/landingPage/arrow_down_green_icon.png'

const Styles = styled.div`
    .jumbo {
        background: url(${carletonImage}) no-repeat  bottom;
        background-size: cover;
        background-color: #0E0E0E;
        z-index: -2;
        height: 100%;
        display: block;
        margin-bottom: 0px;
        height:100vh;
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

    .display-bottom {
        position: absolute;
        top: 100vh;
        margin-top: -17em;
    }

    .arrow-icon{
        background: url(${arrow_down_icon}) no-repeat  bottom;
        background-size: contain;
        width: 15px;
        height: 24.5px;

        &:hover {
            background: url(${arrow_down_green_icon}) no-repeat  bottom;
            background-size: contain;
            cursor: pointer;
        }
    }
`;

export const LandingPage = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <Container fluid className="display-bottom">
                <Row>
                    <Col md={{span:6, offset:1}} xs={{span:10, offset:1}}>
                        <div>
                            <h1 >URBAN FUTURES</h1>
                            <h2 className="title-line">INTRA/INTER</h2>
                            <p>Urban Futures: intra/inter brings together diverse researchers at Carleton University to collaborate with public, private, and not-for-profit partners on questions and challenges at the intersection of the social and operational dimensions of “smart city” technologies.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="new-paragraph" xs={{span:2, offset:4}} />
                        <Link
                            activeClass="active"
                            to="project-overview"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="d-flex justify-content-center"
                        >
                            <div className="arrow-icon"/>
                        </Link>
                </Row>
            </Container>
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
        </Jumbo>
    </Styles>
)