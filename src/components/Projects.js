import { Typography, Card, CardMedia, CardContent, Button, Container } from '@mui/material';
import React from 'react';
import './Styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Snap Companion',
      description: 'A personalized hub for directing Snapchatters to mental health resources through a personal and customizable companion',
      image: './GIFs/sCompanion.gif',
      githubLink: 'https://github.com/avrodzz/SnapCompanion',
    },
  ];

  return (
    <section className="projects-container">
      <Container>
        <Typography variant="h2">My Projects</Typography>
        <div className="card-container">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <CardMedia
                component="img"
                height="500"
                width="200"
                style={{ objectFit: 'cover' }}
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h4">{project.title}</Typography>
                <Typography variant="body1" className="project-description">
                  {project.description}
                </Typography>
                <Button variant="contained" href={project.githubLink} target="_blank">
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
