import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PortfolioProvider } from '../context/portfolio.jsx';
import { DashboardProvider } from '../context/dashborad.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioProvider>
      <DashboardProvider>
        <>
          <link href="https://fonts.googleapis.com/css2?family=Jeju+Gothic&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Jaldi&display=swap" rel="stylesheet" />
          <App />
        </>
      </DashboardProvider>
    </PortfolioProvider>
  </StrictMode>,
);
