import React from 'react';
import { Row, Col, Image, Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    p {
        color: #FFFFFF;
    }

    .carousel-image {
        height: 40vh;
        width: auto;
    }
`

class DigitalArt extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            images: this.importImages(require.context("../../../assets/projects/personalProjects/digitalArt", false, /\.(png|jpe?g|svg)$/))
        }
    }
    
    importImages(r) {
        return r.keys().map(r);
    }
    
    renderCarousel() {
        return this.state.images.map((image, i) => {
            return (
                <Carousel.Item key={i}>
                    <Row>
                        <Col xs={{span:10, offset:1}} className="d-flex justify-content-center"> 
                            <Image
                                className="carousel-image"
                                src={image}
                                alt="Digital Art by Joanna Cooper"
                            />
                        </Col>
                    </Row>
                </Carousel.Item>
            );
        })
    }
    
    render() {
        return(
            /*<Styles>
                <Col>
                    <Row>
                        <h3>DIGITAL ART & ILLUSTRATION</h3>
                    </Row>
                    <Row>
                        <p>
                            During my spare time, I often try to challenge myself with independent projects. Using the Adobe suite and a drawing tablet, I develop images in a water colour style.
                        </p>
                    </Row>
                    {/*<div className="d-flex justify-content-center m-0">
                        <Col xs={{span:12}} >
                            <Carousel>
                                {this.renderCarousel()}
                            </Carousel>
                        </Col>
                    </div>
                    <Row>
                        <Col xs={{span:12}} style={{backgroundColor: "red"}}>
                            <p>Testing</p>
                        </Col>
                    </Row>
                </Col>
                </Styles>*/

            <Styles>
                <Row className="m-0">
                    <Col xs={{span:10, offset:1}} className="mt-5">
                        <Row>
                            <h3>DIGITAL ART & ILLUSTRATION</h3>
                        </Row>
                    </Col>
                    <Col xs={{span:10, offset:1}}>
                        <Row>
                            <p>
                                During my spare time, I often try to challenge myself with independent projects. Using the Adobe suite and a drawing tablet, I develop images in a water colour style.<br/>
                            </p>
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Col xs={{span:12}} style={{backgroundColor: "red"}}>
                                <Carousel>
                                    {this.renderCarousel()}
                                </Carousel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Styles>
        );
    }
}

export default DigitalArt;