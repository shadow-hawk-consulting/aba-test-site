import React from "react";
import { Container, Carousel } from "react-bootstrap";

const Testimonials = () => (
  <section id='testimonials' className='py-5'>
    <Container>
      <h2 className='text-center mb-4'>What Parents Say</h2>
      <Carousel>
        <Carousel.Item>
          <p className='text-center'>
            “The progress our child has made is unbelievable. Thank you ABA team!”
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p className='text-center'>“Caring staff and effective therapy. Highly recommend!”</p>
        </Carousel.Item>
        <Carousel.Item>
          <p className='text-center'>
            “We finally feel hopeful about the future. Amazing support!”
          </p>
        </Carousel.Item>
      </Carousel>
    </Container>
  </section>
);

export default Testimonials;
