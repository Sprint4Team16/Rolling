import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import './styles/font.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>,
);
