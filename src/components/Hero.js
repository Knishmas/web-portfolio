import React from 'react';
import Typography from '@mui/material/Typography';
import './Styles/Hero.css';

const Hero = () => {

  return (
    <div className='hero-container'>
      <div className='hero-container__nav-top-left'>
        <p>About me</p>
      </div>

      <div className='hero-container__nav-top-right'>
        <p>My experience</p>
      </div>

      <div className='hero-container__nav-bottom-left' >
        <p>Projects</p>
      </div>

      <div className='hero-container__nav-bottom-right'>
        <p>Contact me!</p>
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
