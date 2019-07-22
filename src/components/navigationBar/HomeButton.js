
import React from 'react';
import { Navbar } from 'react-bootstrap';
import navbar_logo from '../../assets/navBar/urbanFutures_white_icon.svg';

export const HomeButton = () => (
    <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">
            <img 
                src={navbar_logo}
                width="30"
                height="auto"
                className="d-inline-block align-top"
                alt="Urban Futures Navbar Logo"
            />
        </Navbar.Brand>
    </Navbar>
)