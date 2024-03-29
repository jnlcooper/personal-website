import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import hamburger_icon from '../../assets/navBar/hamburger_icon.svg';
import hamburger_hover_icon from '../../assets/navBar/hamburger_hover_icon.svg';
import navbar_logo from '../../assets/navBar/logo.svg';

const Styles = styled.div`
    .nav-button {
        margin-right: 1em;
        color: #F2D4CD;

        &:hover {
            color: #D8AFA0;
            cursor: pointer;
        }
    }

    .navbar-brand {
        padding: 5px;
    }

    .navbar-toggler {
        width: 30px;
        height: 30px;
        padding: 0;
        border:0;

        &:focus {
            outline: 0;
        }
    }

    .navbar-toggler-icon {
        background-image: url(${hamburger_icon});

        &:active {
            background-image: url(${hamburger_hover_icon});
        }

        &:hover {
            background-image: url(${hamburger_hover_icon});
        }
    }

    @media all and (max-width: 992px) {
        .nav-button {
            margin-right: 0px;
            margin-top: 1em;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
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
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav mr-auto">
                <Nav className="ml-auto">
                    <Nav.Item className="d-flex justify-content-end">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <h4 className="nav-button">ABOUT</h4>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="d-flex justify-content-end">
                        <Link
                            activeClass="active"
                            to="professional-projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <h4 className="nav-button">PORTFOLIO</h4>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="d-flex justify-content-end">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <h4 className="nav-button">CONTACT</h4>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)