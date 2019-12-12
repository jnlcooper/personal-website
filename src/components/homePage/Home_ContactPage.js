import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactIllustration from '../../assets/homePage/contactPage/contact_illustration.png';

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

    p.label-text {
        text-transform: uppercase;
        margin-bottom: 0.5em;
        color: #D8AFA0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    .grey-background {
        background-color: #F2F2F2;
    }

    .col-padding {
        padding-top: 4rem;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
    }

    .col-padding-bottom {
        padding-bottom: 4rem;
    }

    input[type=submit] {
        border: 1px solid #D8AFA0;
        font-family: 'Montserrat', sans-serif;
        font-size: 1em;
        color: #D8AFA0;
        font-weight: 400;
        letter-spacing: 2px;
        text-decoration: none;
        background-color: rgba(0,0,0,0);
        padding: .375rem .75rem;

        &:hover {
            background-color: #F2D4CD;
            color: #D8AFA0;
        }

        &:active {
            outline: none;
        }

        &:focus {
            box-shadow: 0px 0px 5px #F2D4CD;
            outline: none;
        }
    }

    input[type=text], input[type=email], textarea[type=text] {
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid #666A72;
        background-color: rgba(0,0,0,0);
        padding: 0.5em;
        color: #666A72;
        font-family: 'Muli', sans-serif;

        &:focus {
            outline-color: #D8AFA0;
        }
    }

    .vh-50 {
        height: 50vh;
    }

    .description-container {
        height: 100vh;
    }

    @media all and (max-height: 768px) {
        .vh-50 {
            height: 40vh;
        }

        .description-container {
            height: 80vh;
        }
    }

    .visibility {
        visibility: visible;
    }

    @media all and (max-height: 612px) {
        .visibility {
            visibility: hidden;
        }
    }
`

class Home_ContactPage extends React.Component {
    handleLinkClick = () => {
        window.open('https://www.linkedin.com/in/joannacooper1/', "Joanna Cooper LinkedIn Profile");
    }

    render() {
        return(
            <Styles>
                <Row className="m-0 background-color p-0 d-flex">
                    <Col xs={{span:10, offset:1}} md={{span:5, offset:1}} className="description-container">
                        <Row className="vh-50 m-0 col-padding">
                            <Col>
                                <Row>
                                    <h1>GET IN</h1>
                                </Row>
                                <Row className="mb-4">
                                    <h2 className="title-line">CONTACT</h2>
                                </Row>
                                <Row>
                                    <p>
                                        If you would like to contact me, please fill out the following form or reach out to me through LinkedIn.
                                    </p>
                                </Row>
                                <Row className="d-flex align-items-center">
                                    <FontAwesomeIcon 
                                        icon={['fab', 'linkedin']}
                                        size="1x" 
                                        className="icon" 
                                        onClick={() => this.handleLinkClick()}
                                    />
                                    <p className="m-0 hyperlink-text" onClick={() => this.handleLinkClick()}>
                                        www.linkedin.com/in/joannacooper1
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="vh-50 m-0 d-flex align-items-end justify-content-center visibility">
                            <Col xs={{span:10, ofset:1}}>
                                <img 
                                    src={ContactIllustration} 
                                    width="100%" 
                                    height="auto" 
                                    alt="Contact Information Illustration"
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{span:12}} md={{span:6}} className="grey-background col-padding d-flex align-items-center w-100">
                        <Row className="m-0 w-100">
                            <form action="https://formcarry.com/s/Ue7QJ-H1wIM" method="POST" acceptCharset="UTF-8" className="w-100" >
                                <Col xs={{span:6, offset:1}}>
                                    <Row>
                                        <label htmlFor="firstName" className="m-0"><p className="label-text">First name:</p></label>
                                    </Row>
                                    <Row className="mb-4">
                                        <input type="text" name="firstName" id="firstName" className="w-100" />
                                    </Row>
                                    <Row>
                                        <label htmlFor="lastName" className="m-0"><p className="label-text">Last name:</p></label>
                                    </Row>
                                    <Row className="mb-4">
                                        <input type="text" name="lastName" id="lastName" className="w-100" />
                                    </Row>
                                    <Row>
                                        <label htmlFor="email" className="m-0"><p className="label-text">Email address:</p></label>
                                    </Row>
                                    <Row className="mb-4">
                                        <input type="email" name="email" id="email" className="w-100" />
                                    </Row>
                                </Col>
                                <Col xs={{span:10, offset:1}}>
                                    <Row>
                                        <label htmlFor="message" className="m-0"><p className="label-text">Message:</p></label>
                                    </Row>
                                    <Row className="mb-4">
                                        <textarea type="text" name="message" id="message" className="w-100" />
                                    </Row>
                                    <Row className="d-flex justify-content-end col-padding-bottom">
                                        <input type="hidden" name="_gotcha" />
                                        <input type="submit" value='SUBMIT' className="" />
                                    </Row>
                                </Col>
                            </form>
                        </Row>
                    </Col>
                </Row>
            </Styles>
        );
    }
}

export default Home_ContactPage;