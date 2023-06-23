import React from 'react'
import {TextField, Button } from '@mui/material';
const Contact = () => {
    return (
      <form>
        <TextField label="Full Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Message" fullWidth multiline rows={5} />
        <Button type="submit" variant = "outlined">Submit</Button>
      </form>
    );
  };
  

export default Contact