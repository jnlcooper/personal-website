import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';

import ledge_appWebsite from '../../../assets/projects/personalProjects/ledge/ledge_appWebsite.jpg';

const Styles = styled.div`
    p {
        color: #FFFFFF;
    }
`

class LedgeProject extends React.Component {
    render() {
        return(
            <Styles>
                <Row className="m-0">
                    <Col xs={{span:10, offset:1}} className="mt-5">
                        <Row>
                            <h3>LEDGE</h3>
                        </Row>
                        <Row>
                            <p>
                                Ledge is a two part interactive fashion experience consisting of a website and partnered Android application, targeted towards fashion enthusiasts of 18-30 years old.
                            </p>
                        </Row>
                        <Row>
                            <Image
                                fluid
                                src={ledge_appWebsite}
                                alt="Ledge Website and Application"
                            />
                        </Row>
                    </Col>
                </Row>
            </Styles>
        );
    }
}

export default LedgeProject;