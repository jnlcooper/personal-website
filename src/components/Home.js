import React from 'react';
import { Row } from 'react-bootstrap';
import { LandingPage } from './LandingPage';
import { ProjectOverview } from './ProjectOverview';

export const Home = () => {
    return (
        <React.Fragment>    
            <LandingPage />
            <ProjectOverview />
        </React.Fragment>
    );
}