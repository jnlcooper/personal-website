import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Col, Row, Image } from 'react-bootstrap';

import ProfileImg from '../../../assets/homePage/aboutPage/profile_pic_opacity.png';

const Styles = styled.div`
    .jumbo {
        background-color: #666A72;
        border-radius: 0;
    }

    h1 {
        color: #F2D4CD;
    }

    p {
        color: #FFFFFF;
    }

    .image-col {
        margin-bottom: 0px;
    }

    @media all and (max-width: 768px) {
        .image-col {
            margin-bottom: 1em;
        }
    }
`

export const Home_About = () => {
    return(
        <Styles>
            <Jumbo fluid className="jumbo background-color m-0">
                <Row className="d-flex align-items-center p-0 m-0">
                    <Col xs={{span:6, offset:3}} md={{span:3, offset:1}} className="p-0 d-flex justify-content-center image-col">
                        <Row className="m-0 p-0">
                            <Image
                                src={ProfileImg}
                                fluid
                                alt="JC Profile"
                            />
                        </Row>
                    </Col>
                    <Col xs={{span:10, offset:1}} md={{span:6}} className="p-0">
                        <Row className="m-0 p-0">
                            <h1>WHO AM I?</h1>
                        </Row>
                        <Row className="m-0 p-0">                    
                            <p>
                                Welcome to my online portfolio! I am a Research Assistant at Carleton University’s Immersive Media Studio (CIMS). During my time here, I have worked with many project teams ranging from web design/development to motion graphics and 3D animation. I have a keen eye for design and a passion for implementing designs that are effective, creative and user friendly. Examples of my work can be seen within the portfolio section of this website.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Jumbo>
        </Styles>  
    );
}