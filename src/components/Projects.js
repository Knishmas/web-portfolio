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
    {
      title: 'Project 2',
      description: 'project 2 description',
      image: 'path/to/image.jpg', // Provide the correct path to the image file
      githubLink: 'https://github.com/',
    },
    {
      title: 'Project 3',
      description: 'project 3 description',
      image: 'path/to/image.jpg', // Provide the correct path to the image file
      githubLink: 'https://github.com/',
    }
  ];

  return (
    <section className="projects-container">
      <Container>
        <Typography variant="h2">My Projects</Typography>
        <div className="card-container">
            <Card  className="project-card">
              <CardMedia
                component="img"
                height="500"
                width="200"
                style={{ objectFit: 'cover' }}
                image={projects[0].image}
                alt={projects[0].title}
              />
              <CardContent>
                <Typography variant="h4">{projects[0].title}</Typography>
                <Typography variant="body1" className="project-description">
                  {projects[0].description}
                </Typography>
                <Button variant="contained" href={projects[0].githubLink} target="_blank">
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
      
          <Card className="project-card">
            <CardMedia
              component="img"
              height="500"
              width="200"
              style={{ objectFit: 'cover' }}
              image={projects[1].image}
              alt={projects[1].title}
            />
            <CardContent>
              <Typography variant="h4">{projects[1].title}</Typography>
              <Typography variant="body1" className="project-description">
                {projects[1].description}
              </Typography>
              <Button variant="contained" href={projects[1].githubLink} target="_blank">
                View on GitHub
              </Button>
            </CardContent>
          </Card>
          <Card className="project-card">
            <CardMedia
              component="img"
              height="500"
              width="200"
              style={{ objectFit: 'cover' }}
              image={projects[2].image}
              alt={projects[2].title}
            />
            <CardContent>
              <Typography variant="h4">{projects[2].title}</Typography>
              <Typography variant="body1" className="project-description">
                {projects[2].description}
              </Typography>
              <Button variant="contained" href={projects[2].githubLink} target="_blank">
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
