import React from 'react';
import { Jumbotron as Jumbo, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import SeniorProject from './SeniorProject';
import DigitalArt from './DigitalArt';

const Styles = styled.div`
    .jumbo {
        background-color: #666A72;
    }

    h1 {
        color: #FFFFFF;
    }
`

class PersonalProjects extends React.Component {
    render() {
        return(
            <Styles>
                <Jumbo fluid className="jumbo mb-0">
                    <Row className="m-0">
                        <Col xs={{ span: 10, offset: 1 }}>
                            <Row>
                                <h1>PERSONAL</h1>
                            </Row>
                            <Row>
                                <h2 className="title-line">PROJECTS</h2>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-0">
                        <SeniorProject />
                    </Row>
                    <Row className="m-0">
                        <DigitalArt />
                    </Row>
                </Jumbo>
            </Styles>
        );
    }
}

export default PersonalProjects;