import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '/src/assets/img/logo-white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages, faInfoCircle, faBed, faUser, faPerson } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="Nav-container">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" className="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faHome} className="me-3" />
              Inicio
            </Nav.Link>
            <Nav.Link href="#gallery">
              <FontAwesomeIcon icon={faImages} className="me-3" />
              Galería
            </Nav.Link>
            <Nav.Link href="#about">
              <FontAwesomeIcon icon={faPerson} className="me-3" />
              Nosotros
            </Nav.Link>
            <Nav.Link href="#rooms">
              <FontAwesomeIcon icon={faBed} className="me-3" />
              Habitaciones
            </Nav.Link>
            <NavDropdown title={<><FontAwesomeIcon icon={faUser} className="me-3" />Cuenta</>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#register">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
