import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <link href="https://fonts.googleapis.com/css2?family=Jeju+Gothic&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Jaldi&display=swap" rel="stylesheet" />
      <App />
    </>
  </StrictMode>,
);
