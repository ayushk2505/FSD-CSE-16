import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ImageSlider from './ImageSlider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ImageSlider/>
  </React.StrictMode>
);

