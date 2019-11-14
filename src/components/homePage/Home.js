import React from 'react';
import { LandingPage } from './LandingPage';
import { Home_About as About } from './about/Home_About';
import ProfessionalProjects from './projects/ProfessionalProjects';
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
            <div className="about-section">
                <About />
            </div>
            <div className="projects-section">
                <ProfessionalProjects />
            </div>
            <div className="contact-page">
                <ContactPage />
            </div>
        </React.Fragment>
    );
}