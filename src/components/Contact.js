import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import './Styles/Contact.css';
import Animated from './Animated';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setEmailSent(true);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact-section' className="contact-container">
      <Container>
        <Animated>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" textAlign='left' style={{ paddingTop: '25px', color: '#03DAC5', fontWeight: 'bold' }}> Contact</Typography>
            <Typography variant="h3" textAlign='left' style={{ paddingTop: '25px' }}> Let's Chat!</Typography>
            <Typography variant="h5" textAlign='left' style={{ paddingTop: '25px' }}> Feel free to reach out to me if you'd like to get in touch!</Typography>
            <Typography variant="body1" textAlign='left' style={{ paddingTop: '25px', textDecoration: 'none', paddingBottom: '63px' }}> <a href='mailto:AndresEM1524@gmail.com' className="emailLink">✉️ AndresEM1524@gmail.com</a></Typography>
            <Button variant="contained"  color="primary" href="https://drive.google.com/file/d/1wSEUO-KF9K7ondjv09T4fyrjYr0puTLe/view?usp=sharing&usp=embed_facebook" style={{ backgroundColor: '#6002E0', color: 'white', float: 'left' }} target="_blank">
              Resume Ready!
            </Button>
          </Grid>
          <Grid item xs={12} md={6} className="form-container" style={{paddingTop:'3rem'}}>
            {!emailSent ? (
              <form ref={form} onSubmit={sendEmail}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField name='name' required label="Full Name" fullWidth inputProps={{ style: { color: "white" } }} sx={{
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
                    <TextField required label="Email" name='email' fullWidth inputProps={{ style: { color: "white" } }} sx={{
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
                    <TextField required label="Message" name='message' multiline rows={5} fullWidth inputProps={{ style: { color: "white" } }} sx={{
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
            ) : (
              <Grid item sx={{paddingTop: '5.3rem'}}>
                <Typography variant="h2" textAlign='center'>Email Sent!</Typography>
                <img className='icon' src="/icons/check.png" alt="check" />
              </Grid>
            )}
          </Grid>
        </Grid>
        </Animated>
      </Container>
    </section>
  );
};

export default Contact;
