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

class OEEDProject extends React.Component {
    handleBlogClick = () => {
        window.open('https://cims.carleton.ca/#/blogs/OE3D_macro_micro', "OEED Blog");
    }

    render() {
        return (
            <Styles>
                <Row>
                    <Col xs={{span:10, offset:1}} className="mt-5">
                        <Row>
                            <h3>OE3D</h3>
                        </Row>
                    </Col>
                    <Col xs={{span:10, offset:1}}>
                        <Row>
                            <p>
                                OE3D is the biggest project in terms of scale undertaken by CIMS. The objective was to create an application to showcase Eastern Ontario, an area extending over 50,000 square kilometers.<br/>
                                As the primary UI/UX Designer, I was responsible for producing a user friendly, appealing UI that would be used throughout the application. Moreover, I also belong to the development team where we have been producing the application using React and Redux.
                                You can learn more about this project by visiting the CIMS Lab’s blog post here:<br />
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
                            <p className="m-0 hyperlink-text" onClick={() => this.handleBlogClick()}>
                                https://cims.carleton.ca/#/blogs/OE3D_macro_micro
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span:10, offset:1}}>
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
                    </Col>
                </Row>
            </Styles>
        );
    }
}   

export default OEEDProject;