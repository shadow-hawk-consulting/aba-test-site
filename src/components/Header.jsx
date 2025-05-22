import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => (
  <Navbar bg='light' expand='lg' className='shadow-sm'>
    <Container>
      <Navbar.Brand href='#home'>ABA Therapy Center</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='#services'>Services</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#testimonials'>Testimonials</Nav.Link>
          <Nav.Link href='#contact'>Contact</Nav.Link>
        </Nav>
        <Button variant='success'>Get Started</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
