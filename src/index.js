import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import './index.css';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import PortfolioDetails from './pages/portfolioDetails';

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/anhbien'>
      <Navbar />        
      <Routes>
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/portfolio-details/:id" element={<PortfolioDetails />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
