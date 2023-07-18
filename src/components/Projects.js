import { Typography, Card, CardMedia, CardContent, Button, Container, Grid } from '@mui/material';
import React from 'react';
import './Styles/Projects.css';
import Animated from './Animated';

const Projects = () => {
  const projects = [
    {
      title: 'Snap Companion',
      description: 'A prototype feature directing Snapchatters to mental health resources through a personal and customizable companion',
      image: './Project-assets/sCompanion-Cropped2.png',
      githubLink: 'https://github.com/avrodzz/SnapCompanion',
    }, 
    {
      title: 'Rythm Radar',
      description: 'A web application that gathers and displays your data such as top artists and songs over periods of time from Spotify!',
      image: './Project-assets/RythmRadar-Cropped.png',
      githubLink: 'https://github.com/Knishmas/Spotify_API_v2',
    },
    {
      title: 'Eye Candy',
      description: 'Fullstack web app, utilizing machine learning, that can determine an article of clothing and its colors from a user input.',
      image: './Project-assets/EyeCandy-Cropped.png', // Provide the correct path to the image file
      githubLink: 'https://github.com/490-Team-MAAKDE/490-Project',
    }
  ];

  return (
    <section id='project-section' className="projects-container">
      <Container>
        <Animated>
        <Typography variant="h3"  style={{color: '#03DAC5', marginBottom: '2rem'}}>My Projects</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card  className="project-card" style={{ borderRadius: '8px' }}>
              <CardMedia
                component="img"
                height="200"
                width="500"
                style={{ objectFit: 'cover', height: '60%' }}
                image={projects[0].image}
                alt={projects[0].title}
                className="project-card-media"
              />
             <CardContent style={{ backgroundColor: '#233353', textAlign: 'left', paddingLeft: '4rem' }}>
              <Typography variant="body2" style={{ color: 'white', fontWeight: 'bold', fontSize: '2.05rem' }}>{projects[0].title}</Typography>
              <Typography variant="body1" className="project-description" style={{ color: 'white', marginBottom: '0.9rem', textAlign: 'left' }}>
                {projects[0].description}
              </Typography>
              <Button variant="contained" href={projects[0].githubLink} style={{ backgroundColor: '#6002E0', fontWeight: 'bold',  width: '85%' }} target="_blank">
                View on GitHub
              </Button>
            </CardContent>
            </Card>
            </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card  className="project-card" style={{ borderRadius: '8px' }}>
            <CardMedia
              component="img"
              
              height="200"
              width="300"
              style={{ objectFit: 'cover', height: '60%'}}
              image={projects[1].image}
              alt={projects[1].title}
              className="project-card-media"
            />
            <CardContent style={{ backgroundColor: '#233353', textAlign: 'left', paddingLeft: '4rem' }}>
              <Typography variant="body2" style={{ color: 'white', fontWeight: 'bold', fontSize: '2.2rem' }}>{projects[1].title}</Typography>
              <Typography variant="body1" className="project-description" style={{ color: 'white', marginBottom: '0.9rem', textAlign: 'left' }}>
                {projects[1].description}
              </Typography>
              <Button variant="contained" href={projects[0].githubLink} style={{ backgroundColor: '#6002E0', fontWeight: 'bold', width: '85%' }} target="_blank">
                View on GitHub
              </Button>
            </CardContent>

          </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card  className="project-card" style={{ borderRadius: '8px' }}>
            <CardMedia
              component="img"
              height="200"
              width="300"
              style={{ objectFit: 'cover', height: '60%' }}
              image={projects[2].image}
              alt={projects[2].title}
              className="project-card-media"
            />
            <CardContent style={{ backgroundColor: '#233353', textAlign: 'left',paddingLeft: '4rem'  }}>
  <Typography variant="body2" style={{ color: 'white', fontWeight: 'bold', fontSize: '2.2rem' }}>{projects[2].title}</Typography>
  <Typography variant="body1" className="project-description" style={{ color: 'white', marginBottom: '0.9rem', textAlign: 'left' }}>
    {projects[2].description}
  </Typography>
  <Button variant="contained" href={projects[0].githubLink} style={{ backgroundColor: '#6002E0',fontWeight: 'bold',  width: '85%' }} target="_blank">
    View on GitHub
  </Button>
</CardContent>

          </Card>
          </Grid>
          </Grid>
          </Animated>
      </Container>
    </section>
  );
};

export default Projects;
