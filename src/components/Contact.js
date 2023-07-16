import React from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import './Styles/Contact.css';

const Contact = () => {
  return (
    <section id='contact-section' className="contact-container">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" textAlign='left' style={{ paddingTop: '25px',  color: '#03DAC5' }}> Contact</Typography>
            <Typography variant="h3" textAlign='left' style={{ paddingTop: '25px' }}> Let's Chat!</Typography>
            <Typography variant="h5" textAlign='left' style={{ paddingTop: '25px' }}> Feel free to reach out to me if you'd like to get in touch!</Typography>
            <Typography variant="body1" textAlign='left' style={{ paddingTop: '25px', textDecoration: 'none' }}> <a href='mailto:AndresEM1524@gmail.com' className="emailLink">✉️ AndresEM1524@gmail.com</a></Typography>
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
         "&:hover fieldset": {
           borderColor: "#03DAC5",
         },
         "&.Mui-focused fieldset": {
           borderColor: "#03DAC5",
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
         "&:hover fieldset": {
           borderColor: "#03DAC5",
         },
         "&.Mui-focused fieldset": {
           borderColor: "#03DAC5",
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
         "&:hover fieldset": {
           borderColor: "#03DAC5",
         },
         "&.Mui-focused fieldset": {
           borderColor: "#03DAC5",
         },
       },
     }} />
                </Grid>
                <Grid item>
                <Button
      type="submit"
      variant="contained"
      fullWidth
      style={{ backgroundColor: '#6002E0', color: 'white' }}
    >
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
