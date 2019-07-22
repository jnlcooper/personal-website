import React from 'react';
import { LandingPage } from './LandingPage';
import ContactPage from './contactPage/ContactPage';
import { NavigationBar } from '../navigationBar/NavigationBar';

export const Home = () => {
    return (
        <React.Fragment>
            <NavigationBar />
            {/* Classnames used for react-scroll in NavigationBar.js */}
            <div className="landing-page">    
                <LandingPage />
            </div>
            <div className="contact-page">
                <ContactPage />
            </div>
        </React.Fragment>
    );
}