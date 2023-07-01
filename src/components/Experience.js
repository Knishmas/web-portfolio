import React, { useState } from 'react';
import './Styles/Experience.css';
import { Typography, List, ListItem, ListItemText, Divider, Collapse, Container, IconButton, ListItemIcon} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const Experiences = () => {
  const [expanded, setExpanded] = useState(Array(2).fill(false)); 

  const handleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section id="experience-section" className="experience-container">
      <Container>
        <Typography variant="h2" style={{ marginBottom: '110px',  color: '#03DAC5' }}>Experience & Education</Typography>
        <Typography variant="h5">EXPERIENCE</Typography>
        <Divider/>
        <List>
          <ListItem onClick={() => handleExpand(1)}>
          <ListItemIcon>
              <img src="./icons/snapchat.svg" alt="snapchat"  style={{ height: '50px' }} />
          </ListItemIcon>
            <ListItemText primary="Snap Inc." secondary="Snap Engineering Academy Scholar (06/22 - 08/22)"   secondaryTypographyProps={{ style: { color: 'white' } }} />
            {expanded[1] ? (
              <IconButton edge="end" aria-label="expand-less">
                <ExpandLess />
              </IconButton>
            ) : (
              <IconButton edge="end" aria-label="expand-more">
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
        <Typography variant="h5">EDUCATION</Typography>
        <Divider/>
        <List>
          <ListItem onClick={() => handleExpand(0)} >
          <ListItemIcon>
              <img src="./icons/csun.svg" alt="csun"  style={{ height: '50px' }} />
          </ListItemIcon>
            <ListItemText primary="California State University, Northridge" secondary="B.S. Computer Science (2021 - 2023)"   secondaryTypographyProps={{ style: { color: 'white' } }}/>
            {expanded[0] ? (
              <IconButton edge="end" aria-label="expand-less">
                <ExpandLess />
              </IconButton>
            ) : (
              <IconButton edge="end" aria-label="expand-more">
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
          <ListItem style={{ paddingLeft: '4.5rem' }}>
            <ListItemText primary="College of the Canyons" secondary="ADT Computer Science (2018 - 2021)"   secondaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItem>
        </List>
        <Divider />
      </Container>
    </section>
  );
};

export default Experiences;
