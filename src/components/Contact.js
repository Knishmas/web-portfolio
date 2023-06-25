import React from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import './Styles/Contact.css';

const Contact = () => {
  return (
    <section id='contact-section' className="contact-container">
      <Container sx={{ display: 'grid', gridTemplateColumns: '2fr 3fr'}}>
      <Container className="contact-container__text" sx={{ textAlign: 'left'}}>
        <Typography variant="h5" textAlign='left' style={{ paddingTop: '25px' }}> Contact</Typography>
        <Typography variant="h3" textAlign='left' style={{ paddingTop: '25px' }}> Let's Chat!</Typography>
        <Typography variant="h5" textAlign='left' style={{ paddingTop: '25px' }}> Feel free to reach out to me if you'd like to get in touch!</Typography>
      </Container>

        <div className="contact-container__form">
          <form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField required label="Full Name" sx={{ width: '600px' }} />
              </Grid>
              <Grid item>
                <TextField required label="Email" sx={{ width: '600px' }} />
              </Grid>
              <Grid item>
                <TextField required label="Message" multiline rows={5} sx={{ width: '600px' }} />
              </Grid>
              <Grid item>
                <Button type="submit" variant="outlined" sx={{ width: '600px', height: '60px'}}>Send Away! ツ</Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
