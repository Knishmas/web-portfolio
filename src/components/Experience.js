import React, { useState } from 'react';
import './Styles/Experience.css';
import { Typography, List, ListItem, ListItemText, Button, Collapse, Container, IconButton, ListItemIcon } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import Skills from './Skills';

const Experiences = () => {
  const [expanded, setExpanded] = useState(Array(2).fill(false));

  const handleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section id="experience-section" className="experience-container">
      <Container className='experience-content' maxWidth="md" sx={{ paddingTop: 4, paddingBottom: 4}} >
        <Typography variant="h3" style={{ marginBottom: '110px', color: '#03DAC5' }}>Experience & Education</Typography>
        {/* <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#03DAC5' }}>EXPERIENCE</Typography> */}
        <List sx={{ backgroundColor: '#69499E', borderRadius: '8px', marginTop: '16px', marginBottom: '16px' }}>
          <ListItem onClick={() => handleExpand(1)} button sx={{ backgroundColor: '#69499E', borderRadius: '8px', marginBottom: '8px' }}>
            <ListItemIcon>
              <img src="./icons/snapchat.svg" alt="snapchat" style={{ height: '50px' }} />
            </ListItemIcon>
            <ListItemText primary="Snap Inc." secondary="Snap Engineering Academy Scholar (06/22 - 08/22)" secondaryTypographyProps={{ style: { color: 'white' } }} />
            {expanded[1] ? (
              <IconButton edge="end" aria-label="expand-less" style={{ color: 'white' }}>
                <ExpandLess />
              </IconButton>
            ) : (
              <IconButton edge="end" aria-label="expand-more" style={{ color: 'white' }}>
                <ExpandMore />
              </IconButton>
            )}
          </ListItem>
          <Collapse in={expanded[1]}>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="• Selected as one of the top 10% of 150+ applicants in the Los Angeles Metropolitan area for a 9-week software engineering program with Next Shift Learning and Snap Inc." />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Developed a practical prototype feature for Snap that creates a personalized companion for each user to increase engagement." />
              </ListItem>
            </List>
          </Collapse>
        </List>
        {/* <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#03DAC5' }}>EDUCATION</Typography> */}
        <List sx={{ backgroundColor: '#69499E', borderRadius: '8px', marginTop: '16px', marginBottom: '16px' }}>
          <ListItem onClick={() => handleExpand(0)} button sx={{ backgroundColor: '#69499E', borderRadius: '8px', marginBottom: '8px' }}>
            <ListItemIcon>
              <img src="./icons/csun.svg" alt="csun" style={{ height: '50px' }} />
            </ListItemIcon>
            <ListItemText primary="California State University, Northridge" secondary="B.S. Computer Science (2021 - 2023)" secondaryTypographyProps={{ style: { color: 'white' } }} />
            {expanded[0] ? (
              <IconButton edge="end" aria-label="expand-less" style={{ color: 'white' }}>
                <ExpandLess />
              </IconButton>
            ) : (
              <IconButton edge="end" aria-label="expand-more" style={{ color: 'white' }}>
                <ExpandMore />
              </IconButton>
              
            )}
          </ListItem>
          <Collapse in={expanded[0]}>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="• GPA: 3.4" />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Scholarships: Stem Advantage" />
              </ListItem>
            </List>
          </Collapse>
          </List>
          <List sx={{ backgroundColor: '#69499E', borderRadius: '8px', marginTop: '16px', marginBottom: '16px' }}>
          <ListItem style={{ paddingLeft: '4.5rem' }}>
            <ListItemText primary="College of the Canyons" secondary="ADT Computer Science (2018 - 2021)" secondaryTypographyProps={{ style: { color: ' white' } }} />
          </ListItem>
        </List>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>RESUME</Typography>
        <Button variant="contained" color="primary" href="https://drive.google.com/file/d/1wSEUO-KF9K7ondjv09T4fyrjYr0puTLe/view?usp=sharing" style={{ backgroundColor: '#03DAC5', color: 'white' }} target="_blank">
          Resume Ready!
        </Button>
      </Container>
    </section>
  );
};

export default Experiences;
