import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import '../styles/Navbar.css';
import logo from '../images/logo.svg';

const Navpanel = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand><img src={logo} alt="Shortly Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="align-items-center">
          <Nav.Link>Features</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
          <Nav.Link>Resources</Nav.Link>
        </Nav>
        <Nav className="d-lg-none">
          <hr />
        </Nav>
        <Nav className="align-items-center">
          <Nav.Link>Login</Nav.Link>
          <Nav.Link>Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navpanel;
