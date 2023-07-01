import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import './Styles/AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about-me-section" className="about-container">
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="about-container__text">
              <Typography className='about-container__text__title' fontWeight="bold" variant="h6"  style={{ color: '#03DAC5' }} textAlign='left'>About Me</Typography>
              <Typography variant="h3" textAlign='left' sx={{ typography: { sm: "h4", xs: "h5" } }}>
                Hi, I'm Andres. I'm a passionate and dedicated fullstack web developer.
                I'm constantly learning and curiously exploring new technologies.
                When I'm not coding, you can find me making music, at the gym, at concerts, building mechanical keyboards, and gaming!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={require('../assets/decoration.png')} className="about-image" alt="about-decoration" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutMe;
