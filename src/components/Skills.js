import React from 'react';
import { Typography, Container, Grid, Divider } from '@mui/material';
import './Styles/Skills.css';

const Skills = () => {
  return (
    <section className='skills-container'>
      <Divider/>
      <Container style={{ width: '100vw', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Typography variant="h1" align="center" style={{ paddingBottom: '2rem' }}>My Skills</Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/javascript.svg" alt="javascript logo" />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/java.svg" alt="java" />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/html.svg" alt="html" />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/css3.svg" alt="css" />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/react.svg" alt="react" />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/node-js.svg" alt="node" />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/typescript.svg" alt="typescript" />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/mongodb.svg" alt="mongodb" />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/express.svg" alt="express" />
          </Grid>
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <img className='icon' src="/icons/git.svg" alt="git" />
          </Grid>
        </Grid>
      </Container>
      <Divider/>
    </section>
  );
};

export default Skills;
