import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

`

class UrbanFuturesProject extends React.Component {
    render() {
        return(
            <Styles>
                <Row>
                    <Col xs={{span:10, offset:1}} className="mt-5">
                        <Row>
                            <h3>URBAN FUTURES INTER/INTRA</h3>
                        </Row>
                    </Col>
                    <Col xs={{span:10, offset:1}}>
                        <Row>
                            <p>
                                Urban Futures Inter/Intra is an ongoing project that I have been a part of since July 2019. I have been responsible for designing and developing the web application. The project is due to go public in December 2019, so stay tuned for future updates!
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Styles>
        );
    }
}

export default UrbanFuturesProject;