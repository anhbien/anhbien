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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
        <Route path="/resume" element={<Resume />} />
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
