import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h4>About Us</h4>
      <p>We provide information and resources for advanced academic degrees and professional development.Higher Study is dedicated to providing the best resources and support for students seeking higher education opportunities.</p>
    </div>
    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: info@higherstudy.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/seminars">Past Seminars</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
