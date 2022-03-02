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
import Contact from './pages/contact';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />        
      <Routes>
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
