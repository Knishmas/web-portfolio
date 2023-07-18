import React, { useState } from 'react';
import './Styles/Experience.css';
import { Typography, List, ListItem, ListItemText, Collapse, Container, IconButton, ListItemIcon } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import Animated from './Animated';

const Experiences = () => {
  const [expanded, setExpanded] = useState([false, true]);

  const handleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section id="experience-section" className="experience-container">
      <Container className='experience-content' maxWidth="md" sx={{ paddingTop: 4, paddingBottom: 4}} >
        <Animated>
        <Typography variant="h3" style={{ marginBottom: '2rem', color: '#03DAC5' }}>Experience & Education</Typography>
        {/* <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#03DAC5' }}>EXPERIENCE</Typography> */}
        <List sx={{ backgroundColor: expanded[1] ? '#6002E0' : '#4B02B3', borderRadius: '8px', marginTop: '16px', marginBottom: '16px' }}>
          <ListItem onClick={() => handleExpand(1)} button sx={{ backgroundColor: expanded[1] ? '##6002E0' : '#4B02B3', borderRadius: '8px', marginBottom: '8px' }}>
            <ListItemIcon>
              <img src="./icons/snapchat.svg" alt="snapchat" style={{ height: '50px' }} />
            </ListItemIcon>
            <ListItemText
  disableTypography
  primary={<Typography variant="body2" style={{ fontWeight: 'bold' }}>Snap Inc.</Typography>}
  secondary="Snap Engineering Academy Scholar (06/22 - 08/22)"
  style={{ color: 'white' }}
/>
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
              <ListItem sx={{paddingLeft: '4.6rem'}}>
                <ListItemText primary="• Selected as one of the top 10% of 150+ applicants in the Los Angeles Metropolitan area for a 9-week software engineering program with Next Shift Learning and Snap Inc." />
              </ListItem>
              <ListItem sx={{paddingLeft: '4.6rem'}}> 
                <ListItemText primary="• Developed a practical prototype feature for Snap that creates a personalized companion for each user to increase engagement." />
              </ListItem>
            </List>
          </Collapse>
        </List>
        {/* <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#03DAC5' }}>EDUCATION</Typography> */}
        <List sx={{ backgroundColor: expanded[0] ? '#6002E0' : '#4B02B3', borderRadius: '8px', marginTop: '16px', marginBottom: '16px' }}>
          <ListItem onClick={() => handleExpand(0)} button sx={{ backgroundColor: expanded[0] ? '#6002E0' : '#4B02B3', borderRadius: '8px', marginBottom: '8px' }}>
            <ListItemIcon>
              <img src="./icons/csun.svg" alt="csun" style={{ height: '50px' }} />
            </ListItemIcon>
            <ListItemText
  disableTypography
  primary={<Typography variant="body2" style={{ fontWeight: 'bold' }}>California State University, Northridge</Typography>}
  secondary="B.S. Computer Science (2021 - 2023)"
  style={{ color: 'white' }}
/>
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
              <ListItem sx={{paddingLeft: '4.6rem'}}>
                <ListItemText primary="• GPA: 3.4" />
              </ListItem>
              <ListItem sx={{paddingLeft: '4.6rem'}}>
                <ListItemText primary="• Scholarships: Stem Advantage" />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <List sx={{ backgroundColor: '#4B02B3', borderRadius: '8px', marginTop: '16px', marginBottom: '4rem' }}>
          <ListItem style={{ paddingLeft: '4.5rem' }}>
          <ListItemText
  disableTypography
  primary={<Typography variant="body2" style={{ fontWeight: 'bold' }}>College of the Canyons</Typography>}
  secondary="ADT Computer Science (2018 - 2021)"
  style={{ color: 'white' }}
/>
      
          </ListItem>
        </List>
        {/* <Typography variant="h3" style={{ marginBottom: '2rem', color: '#03DAC5', marginBottom: '1rem' }}>Resume</Typography>
        <Button variant="contained" color="primary" href="https://drive.google.com/file/d/1wSEUO-KF9K7ondjv09T4fyrjYr0puTLe/view?usp=sharing" style={{ backgroundColor: '#6002E0', color: 'white' }} target="_blank">
          Resume Ready!
        </Button> */}
        </Animated>
      </Container>
    </section>
  );
};

export default Experiences;
