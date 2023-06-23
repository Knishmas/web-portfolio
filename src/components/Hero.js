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
        <a href="#about-me-section">My Experience</a>
        </Typography> 
      </div>

      <div className='hero-container__nav-bottom-left' >
      <Typography variant="h6">
        <a href="#about-me-section">Projects</a>
        </Typography> 
      </div>

      <div className='hero-container__nav-bottom-right'>
      <Typography variant="h6">
        <a href="#about-me-section">Contact Me</a>
        </Typography> 
      </div>

      <div className='hero-container__text__container'>
        <Typography variant="h1" className='.hero-container__title' color="white">
          Hello friend, I'm Andres
        </Typography>
        <Typography variant="h3" className='.hero-container__subtext' color="white">
          A web developer
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
