
import React from 'react';
import { Navbar } from 'react-bootstrap';
import navbar_logo from '../../assets/navBar/logo.svg';

export const HomeButton = () => (
    <Navbar expand="lg" fixed="top">
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>
            <img 
                src={navbar_logo}
                width="30"
                height="auto"
                className="d-inline-block align-top"
                alt="JC Portfolio Navbar Logo"
            />
        </Navbar.Brand>
    </Navbar>
)