import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <section id='contact' className='py-5 bg-light'>
      <Container>
        <h2 className='text-center mb-4'>Contact Us</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control required type='text' placeholder='Enter your name' />
            <Form.Control.Feedback type='invalid'>Please provide your name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control required type='email' placeholder='Enter your email' />
            <Form.Control.Feedback type='invalid'>
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Message</Form.Label>
            <Form.Control as='textarea' rows={3} required />
            <Form.Control.Feedback type='invalid'>Please enter a message.</Form.Control.Feedback>
          </Form.Group>
          <Button type='submit' variant='success'>
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default ContactForm;
