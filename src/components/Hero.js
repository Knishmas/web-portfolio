import React from 'react';
import Typography from '@mui/material/Typography';
import './Styles/Hero.css';

const Hero = () => {
  // const navbarLinkStyleTopLeft = {
  //   position: 'absolute',
  //   top: '2rem',
  //   left: '2rem',
  //   textDecoration: 'none', // Add this line to remove text decoration
  // };

  // const navbarLinkStyleTopRight = {
  //   position: 'absolute',
  //   top: '2rem',
  //   right: '2rem',
  //   textDecoration: 'none',
  // };

  // const navbarLinkStyleBottomLeft = {
  //   position: 'absolute',
  //   bottom: '2rem',
  //   left: '2rem',
  //   textDecoration: 'none',
  // };

  // const navbarLinkStyleBottomRight = {
  //   position: 'absolute',
  //   bottom: '2rem',
  //   right: '2rem',
  //   textDecoration: 'none',
  // };

  // const mainTextContainerStyle = {
  //   textAlign: 'center',
  //   marginTop: '40vh',
  // };

  // const mainTextStyle = {
  //   fontSize: '3rem',
  //   fontWeight: 'bold',
  //   marginBottom: '1rem',
  // };

  // const subTextStyle = {
  //   fontSize: '1.5rem',
  // };

  return (
    <div className='hero-container'>
      <div className='hero-container__nav-top-left'>
        <a >About me</a>
      </div>

      <div className='hero-container__nav-top-right'>
        <a >My experience</a>
      </div>

      <div className='hero-container__nav-bottom-left' >
        <a >Projects</a>
      </div>

      <div className='hero-container__nav-bottom-right'>
        <a>Contact me!</a>
      </div>

      <div className='hero-container__text__container'>
        <Typography variant="h1" className='.hero-container__title'>
          Hello friend, I'm Andres
        </Typography>
        <Typography variant="h3" className='.hero-container__subtext'>
          A web developer
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
