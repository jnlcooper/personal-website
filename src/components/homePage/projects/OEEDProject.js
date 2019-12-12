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
        color: #0C0C0C;

        &:hover {
            color: #F2D4CD;
        }
    }
`

class OEEDProject2 extends React.Component {
    handleLinkClick = (link) => {
        if(link === "appDev") {
            window.open('https://cims.carleton.ca/#/blogs/OE3D_application_development', "OEED Blog");
        } else if(link === "macroMicro") {
            window.open('https://cims.carleton.ca/#/blogs/OE3D_macro_micro', "OEED Blog");
        } else if(link === "newsSegment") {
            window.open('https://www.cbc.ca/listen/live-radio/1-100-ottawa-morning/clip/15750522-eastern-ontario-business-map', "CBC Listen");
        } else if(link === "article") {
            window.open('https://www.cbc.ca/news/canada/ottawa/carleton-app-eastern-ontario-1.5383345', "CBC News Article")
        }
        
    }

    render() {
        return (
            <Styles>
                <Row className="mt-5">
                    <h3>OE3D</h3>
                </Row>
                <Row>
                    <p>
                        OE3D is the biggest project in terms of scale undertaken by CIMS. The objective was to create an application to showcase Eastern Ontario, an area extending over 45,000 square kilometers.<br/>
                        As the lead UI/UX Designer, I was responsible for producing a user friendly, appealing UI that would be used throughout the application. I also belong to the development team where we have been producing the application using React and Redux.
                        You can learn more about this project by visiting the CIMS Lab’s blog posts here:<br />
                    </p>
                </Row>
                <Row className="d-flex align-items-center ml-3">
                    <FontAwesomeIcon 
                        icon={['fas', 'globe']} 
                        mask={['circle']} 
                        size="1x" 
                        className="icon" 
                        onClick={() => this.handleLinkClick("appDev")}
                    />
                    <p className="m-0 hyperlink-text" onClick={() => this.handleLinkClick("appDev")}>
                        https://cims.carleton.ca/#/blogs/OE3D_application_development
                    </p>
                </Row>
                <Row className="d-flex align-items-center ml-3">
                    <FontAwesomeIcon 
                        icon={['fas', 'globe']} 
                        mask={['circle']} 
                        size="1x" 
                        className="icon" 
                        onClick={() => this.handleLinkClick("macroMicro")}
                    />
                    <p className="m-0 hyperlink-text" onClick={() => this.handleLinkClick("macroMicro")}>
                        https://cims.carleton.ca/#/blogs/OE3D_macro_micro
                    </p>
                </Row>
                <Row>
                    <p className="mt-3">OE3D has also been featured within CBC news. Check out the following links to hear the news segment and read the follow up article:</p>
                </Row>
                <Row className="d-flex align-items-center ml-3">
                    <FontAwesomeIcon 
                        icon={['fas', 'volume-up']}
                        size="1x" 
                        className="icon" 
                        onClick={() => this.handleLinkClick("newsSegment")}
                    />
                    <p className="m-0 hyperlink-text" onClick={() => this.handleLinkClick("newsSegment")}>https://www.cbc.ca/listen/live-radio/1-100-ottawa-morning/clip/15750522-eastern-ontario-business-map</p>
                </Row>
                <Row className="d-flex align-items-center ml-3">
                    <FontAwesomeIcon 
                        icon={['fas', 'globe']} 
                        mask={['circle']} 
                        size="1x" 
                        className="icon" 
                        onClick={() => this.handleLinkClick("article")}
                    />
                    <p className="m-0 hyperlink-text" onClick={() => this.handleLinkClick("article")}>
                        https://www.cbc.ca/news/canada/ottawa/carleton-app-eastern-ontario-1.5383345
                    </p>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B3xYEwtpcD3/'
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName='div'
                            className="d-flex justify-content-center"
                        />
                    </Col>
                    <Col>
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B4I4d0lJd5D/'
                            maxWidth={320}
                            hideCaption={true}
                            containerTagName='div'
                            className="d-flex justify-content-center"
                        />
                    </Col>
                    <Col>
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B37t2l5Jdyj/'
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

export default OEEDProject2;