import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Karla, sans-serif',
    h1: {
      fontFamily: 'Karla, sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: 'Karla, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Karla, sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily:'Roboto, sans-serif',
      lineHeight: 1.3,
    },
    h5: {
      fontFamily:'Roboto, sans-serif',
    },
    h6: {
      fontFamily:'Roboto, sans-serif',
    },allVariants: {
      color: 'white',
    },
    body1: {
      fontFamily:'Roboto, sans-serif',
      lineHeight: 1.4,
    },
  },
  palette: {
    divider: '#ffffff', 
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
