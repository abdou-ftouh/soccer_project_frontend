import React from 'react'
import './Navs.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import logo from '../assets/general-assembly_logo.png'

const Navs = () => {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="home"><img src={logo} alt='GA'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <NavDropdown title="Location" id="basic-nav-dropdown">
            <NavDropdown.Item href="/locations/2">Brooklyn</NavDropdown.Item>
            <NavDropdown.Item href="/locations/4">
              Quenns
            </NavDropdown.Item>
            <NavDropdown.Item href="/locations/1">Manhattan</NavDropdown.Item>
            
            <NavDropdown.Item href="/locations/3">
              Bronx
            </NavDropdown.Item>
            <NavDropdown.Item href="/locations/5">
              Staten Island
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/singup" id='singup'>Sing Up</Nav.Link>
          <Nav.Link href="/login" id="login">Login</Nav.Link>
       
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navs