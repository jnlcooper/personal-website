import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import InstagramEmbed from 'react-instagram-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = styled.div`
    .icon {
        color: #666A72;
        margin-right: 0.5em;

        &:hover {
            color: #F2D4CD;
            cursor: pointer;
        }
    }

    .hyperlink-text {
        color: #666A72;
        font-weight: 600;
        font-size: 0.9em;

        &:hover {
            color: #F2D4CD;
        }
    }
`

class ANQAProject extends React.Component {
    handleLinkClick = () => {
        window.open('https://cims.carleton.ca/anqa/', "ANQA Website");
    }

    render() {
        return(
            <Styles>
                <Row>
                    <Col xs={{span:10, offset:1}} className="mt-5">
                        <Row>
                            <h3>ANQA</h3>
                        </Row>
                    </Col>
                    <Col xs={{span:10, offset:1}}>
                        <Row>
                            <p>
                                Urban Futures Inter/Intra is an ongoing project that I have been a part of since July 2019. I have been responsible for designing and developing the web application. The project is due to go public in December 2019, so stay tuned for future updates!
                            </p>
                        </Row>
                        <Row>
                            <FontAwesomeIcon 
                                icon={['fas', 'globe']} 
                                mask={['circle']} 
                                size="1x" 
                                className="icon" 
                                onClick={() => this.handleBlogClick()}
                            />
                            <p className="m-0 hyperlink-text" onClick={() => this.handleLinkClick()}>
                                https://cims.carleton.ca/anqa/
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span:10, offset:1}}>
                        <Row className="mt-5">
                            <Col>
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/BoIeb97AUgZ/'
                                    maxWidth={320}
                                    hideCaption={true}
                                    containerTagName='div'
                                    className="d-flex justify-content-center"
                                />
                            </Col>
                            <Col>
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/BoL3qFEgx8a/'
                                    maxWidth={320}
                                    hideCaption={true}
                                    containerTagName='div'
                                    className="d-flex justify-content-center"
                                />
                            </Col>
                            <Col>
                                <InstagramEmbed
                                    url='https://www.instagram.com/p/BoUtxxdg3Wo/'
                                    maxWidth={320}
                                    hideCaption={true}
                                    containerTagName='div'
                                    className="d-flex justify-content-center"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Styles>
        );
    }
}

export default ANQAProject;