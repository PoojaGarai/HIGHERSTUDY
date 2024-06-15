import React, { useState } from 'react';
import './ContactPage.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    degree: '',
    postGradDegree: '',
    desiredCollege: '',
    desiredCountry: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have Successfully submitted your details and we will let you know. Kindly check your email.');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Currently Pursuing Degree:
          <select name="degree" value={formData.degree} onChange={handleChange} required>
            <option value="">Select your degree</option>
            <option value="Mumbai University">Mumbai University</option>
            <option value="Delhi University">Delhi University</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Desired Post Graduation Degree:
          <input type="text" name="postGradDegree" value={formData.postGradDegree} onChange={handleChange} required />
        </label>
        <label>
          Desired College:
          <input type="text" name="desiredCollege" value={formData.desiredCollege} onChange={handleChange} required />
        </label>
        <label>
          Desired Country:
          <input type="text" name="desiredCountry" value={formData.desiredCountry} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;