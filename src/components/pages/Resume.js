import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../components/styles.css'

const Resume = () => {
  return (
      <Container className='specific-section'>
        <Row className="mb-1">
          <Col>
            <h1>Resume</h1>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col>
            <Button><a href="https://drive.google.com/file/d/1T-w6f3NEzGzXPT4eW5TesAu1JEGwmJQe/view?usp=share_link" className="card-button" target="_blank" rel="noopener noreferrer">Check out my resume</a></Button>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3>Front-End Development</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Back-End Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Mongoose/MongoDB</li>
              <li>MySQL/Sequelize</li>
              <li>GraphQL</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Other Skills</h3>
            <ul>
              <li>Git</li>
              <li>Heroku</li>
              <li>Shell Commands</li>
            </ul>
          </Col>
        </Row>
      </Container>
  );
}

export default Resume;
