import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [pastStudents, setPastStudents] = useState([]);
  const [upcomingStudents, setUpcomingStudents] = useState([]);

  useEffect(() => {
    fetchPastStudents();
    fetchUpcomingStudents();
  }, []);

  const fetchPastStudents = async () => {
    try {
      const response = await axios.get('/api/past-students'); // Replace with your backend API endpoint
      setPastStudents(response.data);
    } catch (error) {
      console.error('Error fetching past students:', error);
    }
  };

  const fetchUpcomingStudents = async () => {
    try {
      const response = await axios.get('/api/upcoming-students'); // Replace with your backend API endpoint
      setUpcomingStudents(response.data);
    } catch (error) {
      console.error('Error fetching upcoming students:', error);
    }
  };

  return (
    <div>
      <h2>Past Seminar Attendees</h2>
      <ul>
        {pastStudents.map(student => (
          <li key={student.id}>
            {student.name} - {student.attendanceStatus}
          </li>
        ))}
      </ul>

      <h2>Registered Students for Upcoming Seminars</h2>
      <ul>
        {upcomingStudents.map(student => (
          <li key={student.id}>
            {student.name} - {student.registrationStatus}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
