import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <footer className='bg-dark text-white py-4'>
    <Container>
      <Row>
        <Col md={6}>
          <p>&copy; {new Date().getFullYear()} ABA Therapy Center. All rights reserved.</p>
        </Col>
        <Col md={6} className='text-md-end'>
          <p>Follow us on social media</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
