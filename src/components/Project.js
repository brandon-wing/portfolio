import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Project = (props) => {
  const { title, image, description, deployedLink, githubLink } = props;

  return (
    <div className="col-md-6 mb-4">
      <Card>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button href={deployedLink} variant="primary">
              View App
            </Button>
            <Button href={githubLink} variant="primary">
              View Repo
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
