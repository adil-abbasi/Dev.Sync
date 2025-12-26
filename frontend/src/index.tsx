// src/index.tsx   ← most people have this file
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // if you have tailwind or css

// ONLY ONE <BrowserRouter> IN THE WHOLE APP → HERE!
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);