import React from 'react';
import Typography from '@mui/material/Typography';
import './Styles/Hero.css';

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
          variant="h1"
          className="hero-container__title"
          color="white" 
          sx={{
            typography: {
              md: "h2",
              sm: "h3",
              xs: "h4",
            },
            fontSize: {
              xs: '2rem', 
              sm: '3rem',
              md: '6em', 
              lg: '6rem',
              xl: '6rem', 
            },
            letterSpacing: '-0.01em',
          }}
        >
          Hello friend, I'm Andres
        </Typography>
        <Typography variant="h3" className="hero-container__subtext wave-effect">
          A web developer
        </Typography>
        <a href="https://github.com/Knishmas" target='blank'> <img className='hero-icon' src="/icons/github.svg" alt="github" /></a>
       <a href="https://www.linkedin.com/in/andres-macias1/" target='blank'><img className='hero-icon' src="/icons/linkedin.svg" alt="linkedin" /></a> 
      </div>
    </div>
  );
};

export default Hero;
