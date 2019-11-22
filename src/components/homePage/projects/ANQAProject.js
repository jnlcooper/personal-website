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
    handleBlogClick = () => {
        window.open('https://cims.carleton.ca/anqa/', "ANQA Website");
    }

    render() {
        return (
            <Styles>
                <Row className="mt-5">
                    <h3>ANQA</h3>
                </Row>
                <Row>
                    <p>
                        One of the first project’s with CIMS that I was involved in was ANQA. This project was commissioned to document cultural heritage from 7 different historical sites in Syria. I was brought on to the team to help develop the ANQA website.<br />
                    </p>
                </Row>
                <Row className="d-flex align-items-center">
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
            </Styles>
        );
    }
}   

export default ANQAProject;