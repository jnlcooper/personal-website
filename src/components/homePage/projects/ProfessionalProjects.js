import React from 'react';
import { Jumbotron as Jumbo, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import UrbanFuturesProject from './UrbanFuturesProject';
import OEEDProject from './OEEDProject';
import ANQAProject from './ANQAProject';

const Styles = styled.div`

`

class ProfessionalProjects extends React.Component {
    render() {
        return(
            <Styles>
                <Jumbo fluid className="background-color mb-0">
                    <Row className="m-0">
                        <Col xs={{span:10, offset:1}}>
                            <Row>
                                <h1>PROFESSIONAL</h1>
                            </Row>
                            <Row>
                                <h2 className="title-line">PROJECTS</h2>
                            </Row>
                            <UrbanFuturesProject />
                            <OEEDProject />
                            <ANQAProject />
                        </Col>
                    </Row>
                </Jumbo>
            </Styles>
        );
    }
}

export default ProfessionalProjects;