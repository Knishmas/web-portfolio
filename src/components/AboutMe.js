import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import './Styles/AboutMe.css';
import Animated from './Animated';

const AboutMe = () => {
  return (
    <section id="about-me-section" className="about-container">
      
      <Container>
        <Animated>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="about-container__text">
              <Typography className='about-container__text__title' fontWeight="bold" variant="h6"  style={{ color: '#03DAC5' }} textAlign='left'>About Me</Typography>
              <Typography variant="h3" textAlign='left' sx={{fontFamily: 'Karla, sans-serif',fontWeight: 800, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
              Hi, I'm Andres, a passionate full-stack web developer. I thrive on continuous learning and enjoy exploring new technologies! When I'm not coding you can find me making music, staying active at the gym, at concerts, building mechanical keyboards, and gaming.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Animated> 
            <img src={require('../assets/decoration.png')} className="about-image" alt="about-decoration" />
            </Animated>
          </Grid>
        </Grid>
        </Animated>
      </Container>
    </section>
  );
};

export default AboutMe;
