import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Higher Studies</h1>
      <p>
        Higher studies are crucial as they provide advanced knowledge and skills in a specific field. Studying abroad opens up a myriad of opportunities, including exposure to diverse cultures, access to world-class education, and better career prospects.
      </p>
      <p>
        Vasantdada Patil College of Engineering & Visual Arts supports students in achieving their dreams of studying abroad. The college organizes various seminars, including IELTS preparation and other guidance sessions, to help students get into their desired colleges.
      </p>
      <Link to="/contact">
        <button className="contact-button">Contact Us</button>
      </Link>
    </div>
  );
};

export default About;