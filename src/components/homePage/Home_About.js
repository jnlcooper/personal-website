import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Col, Row, Image } from 'react-bootstrap';

import ProfileImg from '../../assets/homePage/aboutPage/profile_pic_opacity.png';

const Styles = styled.div`
    .jumbo {
        background-color: #666A72;
        border-radius: 0;
    }

    h1 {
        color: #F2D4CD;
    }

    h3 {
        font-size: 1em;
    }

    p {
        color: #FFFFFF;
    }

    .image-col {
        margin-bottom: 0px;
    }

    .bio-padding {
        padding: 0;
    }

    @media all and (max-width: 768px) {
        .image-col {
            margin-bottom: 1em;
        }

        .bio-padding {
            padding-bottom: 4rem;
        }
    }

    .title-line {
        border-width: 1px;
    }
`

export const Home_About = () => {
    return(
        <Styles>
            <Jumbo fluid className="jumbo background-color m-0 p-0">
                <Row className="d-flex align-items-center p-0 m-0">
                    <Col xs={{span:6, offset:3}} md={{span:3, offset:1}} className="p-0 d-flex justify-content-center image-col">
                        <Row className="mt-5 mb-0 ml-0 mr-0 p-0">
                            <Image
                                src={ProfileImg}
                                fluid
                                alt="JC Profile"
                            />
                        </Row>
                    </Col>
                    <Col xs={{span:10, offset:1}} md={{span:6}} className="p-0">
                        <Row className="mt-0 mr-0 ml-0 mb-3 p-0">
                            <h1>WHO AM I?</h1>
                        </Row>
                        <Row className="m-0 p-0">
                            <p style={{color: '#F2D4CD'}} className="m-0">JOANNA COOPER, OTTAWA, ON</p>
                        </Row>
                        <Row className="m-0 p-0">
                            <p style={{color: '#F2D4CD'}} className="m-0">CURRENT POSITION:&nbsp;</p><p className="m-0">RESEARCHER ASSISTANT, CARLETON IMMERSIVE MEDIA STUDIO</p>
                        </Row>
                        <Row className="m-0 p-0 title-line">
                            <p style={{color: '#F2D4CD'}} className="mt-0 mr-0 ml-0 mb-1">ROLE:&nbsp;</p><p style={{color: '#FFFFFF'}} className="mt-0 mr-0 ml-0 mb-1"> LEAD UI/UX DESIGNER & FRONT END WEB DEVELOPER</p>    
                        </Row>
                        <Row className="mb-0 mr-0 ml-0 mt-1 bio-padding">
                            <p className="m-0">
                                Welcome to my online portfolio! I am a Research Assistant at Carleton University’s Immersive Media Studio (CIMS). During my time here, I have worked with many project teams ranging from web design/development to motion graphics and 3D animation. I have a keen eye for design and a passion for implementing designs that are effective, creative and user friendly.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Jumbo>
        </Styles>  
    );
}