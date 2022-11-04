import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
      <Navbar.Brand href="#home">Note App</Navbar.Brand>
      <Nav className="me-auto ms-auto">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to='/about' className="nav-link">Getting Started</NavLink>
        <NavLink to="/archive" className="nav-link">Archive</NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar