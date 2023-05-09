import React from 'react';
import { useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    useEffect(() => {
      const aboutLink = document.querySelector('a[href="/about"]');
      if (location.pathname === '/' || '/about') {
        aboutLink.classList.add('active');
      } else {
        aboutLink.classList.remove('active');
      }
    }, [location.pathname]);
  
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Brandon Wing</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/about" exact>About Me</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            <Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
