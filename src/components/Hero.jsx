import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => (
  <div className='bg-light py-5 text-center'>
    <Container>
      <h1 className='display-4'>Empowering Families, One Step at a Time</h1>
      <p className='lead'>
        Comprehensive ABA therapy services tailored to your child’s unique needs.
      </p>
      <Button variant='success' size='lg'>
        Schedule a Consultation
      </Button>
    </Container>
  </div>
);

export default Hero;
