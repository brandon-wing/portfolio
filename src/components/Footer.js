import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './styles.css'

function Footer() {
  return (
    <Container fluid className="pt-5 bg-dark text-white py-3 footer">
      <Row>
        <Col xs={12} md={12}>
          <div className="d-flex justify-content-center">
            <a href="https://github.com/rudyxwhite" target="_blank" rel="noopener noreferrer" className="text-white mx-3 iconlink">
              <FaGithub size={50} />
            </a>
            <a href="https://www.linkedin.com/in/brandon-wing-66883126b/" target="_blank" rel="noopener noreferrer" className="text-white mx-3 iconlink">
              <FaLinkedin size={50} />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white mx-3 iconlink">
              <FaTwitter size={50} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
