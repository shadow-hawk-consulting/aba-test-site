import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import services from "../data/servicesData";

const Services = () => (
  <section id='services' className='py-5 bg-white'>
    <Container>
      <h2 className='text-center mb-4'>Our Services</h2>
      <Row>
        {services.map((service, idx) => (
          <Col md={4} className='mb-4' key={idx}>
            <Card className='h-100 shadow-sm'>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Services;
