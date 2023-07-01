import React from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import './Styles/Contact.css';

const Contact = () => {
  return (
    <section id='contact-section' className="contact-container">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" textAlign='left' style={{ paddingTop: '25px',  color: '#03DAC5' }}> Contact</Typography>
            <Typography variant="h3" textAlign='left' style={{ paddingTop: '25px' }}> Let's Chat!</Typography>
            <Typography variant="h5" textAlign='left' style={{ paddingTop: '25px' }}> Feel free to reach out to me if you'd like to get in touch!</Typography>
          </Grid>
          <Grid item xs={12} md={6} className="form-container">
            <form>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField required label="Full Name" fullWidth  inputProps={{ style: { color: "white" } }}  sx={{
       "& .MuiOutlinedInput-root": {
         "& fieldset": {
           borderColor: "white",
         },
       },
     }} />
                </Grid>
                <Grid item>
                  <TextField required label="Email" fullWidth  inputProps={{ style: { color: "white" } }}  sx={{
       "& .MuiOutlinedInput-root": {
         "& fieldset": {
           borderColor: "white",
         },
       },
     }}/>
                </Grid>
                <Grid item>
                  <TextField required label="Message" multiline rows={5} fullWidth  inputProps={{ style: { color: "white" } }}  sx={{
       "& .MuiOutlinedInput-root": {
         "& fieldset": {
           borderColor: "white",
         },
       },
     }} />
                </Grid>
                <Grid item>
                  <Button type="submit" variant="outlined" fullWidth>
                    Send Away! ツ
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
