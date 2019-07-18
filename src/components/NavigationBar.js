import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import navbar_logo from '../assets/navBar_logo.png';

const Styles = styled.div`
    .navbar {
        /*background-color: #0E0E0E;*/
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #F2F2F2;

        &:hover {
            color: #99B6AE;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" fixed="top">
            <Navbar.Brand href="/">
                <img 
                    src={navbar_logo}
                    width="44"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="Urban Futures Navbar Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">PROJECTS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">RESEARCHERS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">PROJECTS & PUBLICATIONS</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">CONTACT INFORMATION</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)