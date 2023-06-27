import { Typography, Card, CardMedia, CardContent, Button, Container, Grid, Box } from '@mui/material';
import React from 'react';
import './Styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Snap Companion',
      description: 'A personalized hub for directing Snapchatters to mental health resources through a personal and customizable companion',
      image: './Project-assets/sCompanion.gif',
      githubLink: 'https://github.com/avrodzz/SnapCompanion',
    }, 
    {
      title: 'Rythm Radar',
      description: 'A web application that gathers and displays your data such as top artists and songs over periods of time from Spotify!',
      image: './Project-assets/RythmRadar.png',
      githubLink: 'https://github.com/Knishmas/Spotify_API_v2',
    },
    {
      title: 'Eye Candy',
      description: 'Fullstack web app, utilizing machine learning models, that can determine an article of clothing and its colors from a user image input.',
      image: './Project-assets/EyeCandy.png', // Provide the correct path to the image file
      githubLink: 'https://github.com/490-Team-MAAKDE/490-Project',
    }
  ];

  return (
    <section className="projects-container">
      <Container>
        <Typography variant="h2">My Projects</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Card  className="project-card">
              <CardMedia
                component="img"
                height="500"
                width="200"
                style={{ objectFit: 'cover' }}
                image={projects[0].image}
                alt={projects[0].title}
                className="project-card-media"
              />
              <CardContent>
                <Typography variant="h4">{projects[0].title}</Typography>
                <Box display="flex" justifyContent="center">
                <Typography variant="body1" className="project-description">
                  {projects[0].description}
                </Typography>
                </Box>
                <Button variant="contained" href={projects[0].githubLink} target="_blank">
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
            </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Card className="project-card">
            <CardMedia
              component="img"
              height="500"
              width="200"
              style={{ objectFit: 'cover' }}
              image={projects[1].image}
              alt={projects[1].title}
              className="project-card-media"
            />
            <CardContent>
              <Typography variant="h4">{projects[1].title}</Typography>
              <Box display="flex" justifyContent="center">
              <Typography variant="body1" className="project-description">
                {projects[1].description}
              </Typography>
              </Box>
              <Button variant="contained" href={projects[1].githubLink} target="_blank">
                View on GitHub
              </Button>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
          <Card className="project-card">
            <CardMedia
              component="img"
              height="500"
              width="200"
              style={{ objectFit: 'cover' }}
              image={projects[2].image}
              alt={projects[2].title}
              className="project-card-media"
            />
            <CardContent>
              <Typography variant="h4">{projects[2].title}</Typography>
              <Box display="flex" justifyContent="center">
              <Typography variant="body1" className="project-description">
                {projects[2].description}
              </Typography>
              </Box>
              <Button variant="contained" href={projects[2].githubLink} target="_blank">
                View on GitHub
              </Button>
            </CardContent>
          </Card>
          </Grid>
          </Grid>
      </Container>
    </section>
  );
};

export default Projects;
