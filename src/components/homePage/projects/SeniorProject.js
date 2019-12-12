import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';

import juniorBanner from '../../../assets/projects/personalProjects/seniorProject/juniorsjourneybanner.png';

const Styles = styled.div`
    p {
        color: #FFFFFF;
    }
`

class UrbanFuturesProject extends React.Component {
    render() {
        return(
            <Styles>
                <Row className="m-0">
                    <Col xs={{span:10, offset:1}} className="mt-5">
                        <Row>
                            <h3>JUNIOR'S JOURNEY - INTERACTIVE CHILDREN'S ANIMATION</h3>
                        </Row>
                        <Row>
                            <p>
                                Junior’s Journey is an interactive children’s animation that I was a part of during my final year at Carleton University. Throughout the project, my main roles consisted of character design, 3D modelling and animation.
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row className="m-0">
                    <Col xs={{span:8, offset:2}} className="p-0 d-flex justify-content-center">
                        <Image
                            src={juniorBanner}
                            fluid
                        />
                    </Col>
                </Row>
            </Styles>
        );
    }
}

export default UrbanFuturesProject;