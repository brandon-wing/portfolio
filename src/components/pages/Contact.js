import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../components/styles.css';

const Contact = () => {
  return (
    <Container className='specific-section'>
      <Row className="mb-1 pt-3">
        <Col>
          <h1>Contact Me</h1>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email address" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message here." />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
