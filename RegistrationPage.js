// RegistrationPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const RegistrationPage = () => {
  const location = useLocation();
  const { student } = location.state;

  return (
    <div className="registration-container">
      <h1>Registration Details</h1>
      <div>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Branch:</strong> {student.branch}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>
      <p>Please fill out the registration form below:</p>
      {/* Your registration form JSX can be added here */}
    </div>
  );
};

export default RegistrationPage;
