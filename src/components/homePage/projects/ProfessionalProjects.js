import React from 'react';
import { Jumbotron as Jumbo, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import UrbanFuturesProject from './UrbanFuturesProject';
import OEEDProject from './OEEDProject';
import ANQAProject from './ANQAProject';

const Styles = styled.div`

`

class ProfessionalProjects extends React.Component {
    handleClick = (icon) => {
        if(icon === "oeed_blog") {
            window.open('https://cims.carleton.ca/#/blogs/OE3D_macro_micro', "CIMS OEED Blog");
        }
    }

    render() {
        return(
            <Styles>
                <Jumbo fluid className="background-color">
                    <Row>
                        <Col xs={{ span: 10, offset: 1 }} className="p-0">
                            <Row>
                                <h1>PROFESSIONAL</h1>
                            </Row>
                            <Row>
                                <h2 className="title-line">PROJECTS</h2>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <UrbanFuturesProject />
                    </Row>
                    <Row>
                        <OEEDProject />
                    </Row>
                    <Row>
                        <ANQAProject />
                    </Row>
                </Jumbo>
            </Styles>
        );
    }
}

export default ProfessionalProjects;