import React from 'react'
import {TextField, Button, Typography, Container } from '@mui/material';
import './Styles/Contact.css';
const Contact = () => {
    return (
    <section className="contact-container">
        <Container sx={{ display: 'grid', gridTemplateColumns: '2fr 3fr' }} alignItems="center">
            <div className="contact-container__text">
                <Typography variant="h5" textAlign='left'> Contact</Typography>
                <Typography variant="h3" textAlign='left'> Let's Chat!</Typography>
                <Typography variant="h5" textAlign='left'> Feel free to reach out to me if you'd like to get in touch!</Typography>
            </div>
            <div className="contact-container__form">
                <form>
                    <TextField label="Full Name" fullWidth />
                    <TextField label="Email" fullWidth />
                    <TextField label="Message" fullWidth multiline rows={5} />
                    <Button type="submit" variant = "outlined">Submit</Button>
                </form>
            </div>
         </Container>
    </section>
    );
  };
  

export default Contact