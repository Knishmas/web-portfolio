import React from 'react';
import './Styles/AboutMe.css';
import { Typography } from '@mui/material';
const AboutMe = () => {
  return (
    <section className="about-container">
      <div className="about-container__text">
      <Typography className='about-container__text__title' fontWeight="bold" variant="h6" textAlign='left' >About Me </Typography>
        <Typography variant="h3" textAlign='left'>
          Hi, I'm Andres. I'm a passionate and dedicated fullstack web developer.
          I'm constantly learning and curiously exploring new technologies. 
          When I'm not coding, you can find me making music, at the gym, at concerts, building mechanical keyboards, and gaming!
        </Typography>
      </div>

      <img src={require('../assets/decoration.png')} style={{ width: '500px' }}  alt="about-decoration" />
    </section>
  );
};

export default AboutMe;
