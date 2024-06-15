// components/PastSeminars.js
import React from 'react';
import './PastSeminars.css';
import { Link } from 'react-router-dom';

// Importing sample images for seminars
import seminarImage1 from '../Assets/seminarImage1.png';
import seminarImage2 from '../Assets/seminarImage2.png';
import seminarImage3 from '../Assets/seminarImage3.png';
import seminarImage4 from '../Assets/seminarImage4.png';
import seminarImage5 from '../Assets/seminarImage5.png';
import seminarImage6 from '../Assets/seminarImage6.png';
import seminarImage7 from '../Assets/seminarImage7.png';
import seminarImage8 from '../Assets/seminarImage8.png';
import seminarImage9 from '../Assets/seminarImage9.png';

const PastSeminars = () => {
  // Example data for upcoming seminars (dummy data)
  const upcomingSeminars = [
    {
      id: 7,
      title: "Campus Placement for MICROSOFT",
      day: "Thursday",
      date: "2024-06-20",
      time: "11:30 AM",
      image: seminarImage7 // Sample image import
    },
    {
      id: 8,
      title: "Campus Placement for AMAZON",
      day: "Monday",
      date: "2024-07-01",
      time: "9:00 AM",
      image: seminarImage8 // Sample image import
    },
    {
      id: 9,
      title: "Campus Placement for FLIPKART",
      day: "Wednesday",
      date: "2024-07-10",
      time: "3:00 PM",
      image: seminarImage9 // Sample image import
    },
    // Add more upcoming seminars as needed
  ];

  // Example data for previous seminars (dummy data)
  const previousSeminars = [
    {
      id: 1,
      title: "Campus Placement for NEROLAC",
      day: "Monday",
      date: "2022-04-05",
      time: "10:00 AM",
      image: seminarImage1, // Sample image import
      student: {
        name: "John Doe",
        branch: "Computer Science",
        department: "Engineering",
        id: "12345",
        email: "johndoe@example.com"
      }
    },
    {
      id: 2,
      title: "Campus Placement for ACCENTURE",
      day: "Wednesday",
      date: "2024-06-05",
      time: "2:00 PM",
      image: seminarImage2 // Sample image import
    },
    {
      id: 3,
      title: "Campus Placement for CAPGEMINI",
      day: "Friday",
      date: "2024-06-01",
      time: "4:30 PM",
      image: seminarImage3 // Sample image import
    },
    {
      id: 4,
      title: "Campus Placement for SAMSUNG",
      day: "Friday",
      date: "2022-07-30",
      time: "4:30 PM",
      image: seminarImage4 // Sample image import
    },
    {
      id: 5,
      title: "Campus Placement for FUNDSROOM LIMITED",
      day: "Friday",
      date: "2024-06-01",
      time: "4:30 PM",
      image: seminarImage5 // Sample image import
    },
    {
      id: 6,
      title: "Campus Placement for GOOGLE",
      day: "Friday",
      date: "2024-06-01",
      time: "4:30 PM",
      image: seminarImage6 // Sample image import
    },
    // Add more previous seminars as needed
  ];

  return (
    <div className="seminars-container">
      <h1><b>PAST AND UPCOMING SEMINARS</b></h1>
      <p>
        The PastSeminars component serves as a comprehensive display of both previous and upcoming seminars, offering a clear overview of educational events. It showcases a structured list of past seminars attended by students, detailing each event with titles, descriptions, dates, and times. Additionally, it previews upcoming seminars, providing insights into future academic engagements. Utilizing React and Axios, it dynamically fetches and filters seminar data, ensuring an interactive and informative user experience. With responsive design and intuitive UI components, PastSeminars effectively supports students in tracking their academic pursuits and planning for upcoming educational opportunities.
      </p>

      {/* Upcoming Seminars */}
      <div className="upcoming-seminars">
        <h2><b>UPCOMING SEMINARS</b></h2>
        <div className="seminar-list">
          {upcomingSeminars.map(seminar => (
            <div className="seminar-card" key={seminar.id}>
              <img src={seminar.image} alt={seminar.title} className="seminar-image" />
              <div className="seminar-details">
                <h3>{seminar.title}</h3>
                <p>Day: {seminar.day}</p>
                <p>Date: {seminar.date}</p>
                <p>Time: {seminar.time}</p>
                <button className="details-button">Details</button>
                <Link to={{ pathname: '/registration', state: { seminar } }}>
                  <button className="register-button">Register</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Seminars */}
      <div className="previous-seminars">
        <h2><b>PREVIOUS SEMINARS</b></h2>
        <div className="seminar-list">
          {previousSeminars.map(seminar => (
            <div className="seminar-card" key={seminar.id}>
              <img src={seminar.image} alt={seminar.title} className="seminar-image" />
              <div className="seminar-details">
                <h3>{seminar.title}</h3>
                <p>Day: {seminar.day}</p>
                <p>Date: {seminar.date}</p>
                <p>Time: {seminar.time}</p>
                <button className="details-button">Details</button>
                <Link to={{ pathname: '/registration', state: { seminar } }}>
                  <button className="register-button">Register</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastSeminars;
