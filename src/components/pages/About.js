import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import avatar from '../../images/avatar.jpeg';


const About = () => {
  return (
    <Container className="pt-5">
      <Row>
        <Col xs={12} md={4}>
        <Image src={avatar} rounded fluid />

        </Col>
        <Col xs={12} md={8}>
          <p>Hi, I'm Brandon! Alhough I currently bartend in the Northloop neighborhood of Minneapolis, I'm also an aspiring web developer. 
            I grew up in a small town in southern Minnesota, where I discovered my passion for technology at a young age.
             In my free time, I enjoy playing Oldschool Runescape, watching movies, and spending time with my family.
             </p>
             <p>
                Throughout my time at the bootcamp, I have learned both front-end and back-end technologies that make 
                me a well-rounded, well-prepared individual for whatever tasks may arise! Check out my portfolio and resume via the links above!
             </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
