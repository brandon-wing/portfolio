import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';


const Project = (props) => {
  const { title, image, description, deployedLink, githubLink } = props;

  return (
    <div fluid className="col-md-6 mb-4">
      <Card className='projectcard'>
        <Card.Img className="projectpic" variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title className='card-title'>{title}</Card.Title>
          <Card.Text className='card-description'>{description}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button><a href={deployedLink} className='card-button'>
                Deployed App
              </a>
              </Button>
            <a href={githubLink} variant="primary">
            <FaGithub className="card-repo" size={50} />
              </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
