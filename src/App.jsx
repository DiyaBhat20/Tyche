import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import InputPage from './pages/InputPage';
import OutputPage from './pages/OutputPage';
import Volatility from './pages/Volatility';
import PortfolioPositions from './pages/PortfolioPositions';
import PortfolioWeights from './pages/PortfolioWeights';
import Dashboard from './pages/Dashboard.jsx';


function App() {
  return (
    <div className='bg-black min-h-screen'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/output" element={<OutputPage />} />
          <Route path="/volatility" element={<Volatility />} />
          <Route path="/portfoliopositions" element={<PortfolioPositions />} />
          <Route path="/portfolioweights" element={<PortfolioWeights />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
