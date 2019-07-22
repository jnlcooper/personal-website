import React from 'react';
import { Container, Row } from 'react-bootstrap';
import  { HomeButton } from './navigationBar/HomeButton';

export const NoMatch = () => {
    return (
        <React.Fragment>
            <HomeButton />
            <div className="background-color vw-100 vh-100">
                <Container className="pt-5">
                    <Row>
                        <h1>ERROR 404</h1>
                    </Row>
                    <Row>
                        <h2 className="title-line">NO MATCH</h2>
                    </Row>
                    <Row>
                        <p>Sorry, this page cannot be found. Please re-fresh the page and try again...</p>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}