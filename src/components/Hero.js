import React from 'react';
import Typography from '@mui/material/Typography';
import './Styles/Hero.css';
import { Container } from '@mui/material';

const Hero = () => {

  return (
    <div className='hero-container'>
      <div className='hero-container__nav-top-left'>
      <Typography variant="h6">
        <a href="#about-me-section">About me</a>
        </Typography> 
      </div>

      <div className='hero-container__nav-top-right'>
      <Typography variant="h6">
        <a href="#experience-section">My Experience</a>
        </Typography> 
      </div>

      <div className='hero-container__nav-bottom-left' >
      <Typography variant="h6">
        <a href="#project-section">Projects</a>
        </Typography> 
      </div>

      <div className='hero-container__nav-bottom-right'>
      <Typography variant="h6">
        <a href="#contact-section">Contact Me</a>
        </Typography> 
      </div>

      <div className='hero-container__text__container'>
      <Typography
          variant="h2"
          className="hero-container__title"
          color="white" 
          sx={{
            fontSize: {
              xs: '2rem', 
              sm: '3rem',
              md: '4rem', 
              lg: '6rem',
              xl: '6rem', 
            },
            letterSpacing: '-0.01em',
          }}
        >
          Hello friend, I'm Andres
        </Typography>
        <Container  sx={{
        maxWidth: '60%'}}>
        <Typography
          variant="h3"
          className="hero-container__subtext wave-effect"
          style={{ paddingBottom: '1rem' }}
          sx={{
            fontSize: {
              xs: '1rem', 
              sm: '1.2rem',
              md: '1.5rem', 
              lg: '2rem',
              xl: '2rem', 
            },
          }}
        >
           A full-stack web dev with a drive to create innovative & seamless digital experiences
        </Typography>
        </Container>
        <a href="https://github.com/Knishmas" target='blank'> <img className='hero-icon' src="/icons/github.svg" alt="github" /></a>
       <a href="https://www.linkedin.com/in/andres-macias1/" target='blank'><img className='hero-icon' src="/icons/linkedin.svg" alt="linkedin" /></a> 
      </div>
    </div>
  );
};

export default Hero;
