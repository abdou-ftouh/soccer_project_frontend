import React from 'react'
import './Navs.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import logo from '../assets/general-assembly_logo.png'
const Navs = () => {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt='GA'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <NavDropdown title="Location" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Brooklyn</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Quenns
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Manhathen</NavDropdown.Item>
            
            <NavDropdown.Item href="#action/3.4">
              Bronx
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Staten Island
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" id='singup'>Sing Up</Nav.Link>
          <Nav.Link href="#link" id="login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navs