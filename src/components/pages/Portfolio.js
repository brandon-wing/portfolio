import React from 'react';
import Project from '../../components/Project';
import Project1 from '../../images/project1.png';
import Project2 from '../../images/project2.png';
import Project3 from '../../images/project3.png';
import Project4 from '../../images/project4.png';
import Project5 from '../../images/project5.png';
import Project6 from '../../images/project6.png';
import '../../components/styles.css'
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Text Editor Web App',
      image: Project1,
      description: 'An installable PWA!',
      deployedLink: 'https://pwa-jate-bw.herokuapp.com/',
      githubLink: 'https://github.com/rudyxwhite/text-editor-pwa',
    },
    {
      id: 2,
      title: 'Work Day Planner',
      image: Project2,
      description: 'A simple calendar app for scheduling your work day.',
      deployedLink: 'https://rudyxwhite.github.io/brandon-wing-workday/',
      githubLink: 'https://github.com/rudyxwhite/brandon-wing-workday',
    },
    {
      id: 3,
      title: 'Password Generator',
      image: Project3,
      description: 'Generate a secure password with this simple app.',
      deployedLink: 'https://rudyxwhite.github.io/brandon-password-gen/',
      githubLink: 'https://github.com/rudyxwhite/brandon-password-gen',
    },
    {
      id: 4,
      title: 'Plenty of Guilds',
      image: Project4,
      description: 'A full-stack project, allowing authenticated users to create a WoW raiding group.',
      deployedLink: 'https://plenty-of-guilds.herokuapp.com/',
      githubLink: 'https://github.com/Micheala-H/plenty-of-guilds',
    },
    {
      id: 5,
      title: 'Weather Event Tracker',
      image: Project5,
      description: 'View information regarding recent global weather events.',
      deployedLink: 'https://ross-boughman.github.io/weather-event-tracker/',
      githubLink: 'https://github.com/Ross-Boughman/weather-event-tracker',
    },
    {
      id: 6,
      title: 'Project 6',
      image: Project6,
      description: 'Our final project will go here',
      deployedLink: 'https://github.com',
      githubLink: 'https://github.com/',
    }
  ];

  return (
    <div className="container-fluid my-5 specific-section">
      <div className="row">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
