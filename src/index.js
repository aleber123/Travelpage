import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

// Skapar en rot (root) för rendering av React-applikationen
const root = createRoot(document.getElementById('app'));


root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
