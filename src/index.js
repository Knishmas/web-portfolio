import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"Karla", sans-serif',
    h1: {
      fontFamily: '"Karla", sans-serif',
    },
    h2: {
      fontFamily: '"Karla", sans-serif',
    },
    h3: {
      fontFamily: 'Inconsolata, monospace',
    },
    h4: {
      fontFamily: 'Inconsolata, monospace',
    },
    h5: {
      fontFamily: 'Inconsolata, monospace',
    },
    h6: {
      fontFamily: 'Inconsolata, monospace',
    },allVariants: {
      color: 'white',
    },
    body1: {
      fontFamily: 'Inconsolata, monospace',
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
