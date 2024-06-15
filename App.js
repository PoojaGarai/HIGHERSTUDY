import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar';
import HomePage from './Component/HomePage';
import FAQ from './Component/FAQ';
import PastSeminars from './Component/PastSeminars';
import AboutPage from './Component/AboutPage'; // Import AboutPage component
import ContactPage from './Component/ContactPage'; // Import ContactPage component
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/seminars" element={<PastSeminars />} />
            <Route path="/about" element={<AboutPage />} /> {/* Route for AboutPage */}
            <Route path="/contact" element={<ContactPage />} /> {/* Route for ContactPage */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
