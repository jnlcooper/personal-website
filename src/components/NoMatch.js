import React from 'react';
import { Jumbotron as Jumbo, Col, Row } from 'react-bootstrap';
import  { HomeButton } from './navigationBar/HomeButton';
import styled from 'styled-components';

const Styles = styled.div`
    
`

export const NoMatch = () => {
    return (
        <Styles>
            <HomeButton />
            <Jumbo fluid className="vh-100 mb-0 background-color">
                <Row className="m-0">
                    <Col xs={{span:10, offset:1}}>
                        <Row>
                            <h1>ERROR 404</h1>
                        </Row>
                        <Row>
                            <h2 className="title-line">NO MATCH</h2>
                        </Row>
                        <Row>
                            <p>Sorry, this page cannot be found. Please check the URL, re-fresh the page and try again...</p>
                        </Row>
                    </Col>
                </Row>
            </Jumbo>
        </Styles>
    );
}