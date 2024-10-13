import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function MentorList() {
  const [mentors, setMentors] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [expertise, setExpertise] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const response = await axios.get('https://assigning-mentor-and-students-with-y002.onrender.com/api/mentors');
      setMentors(response.data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://assigning-mentor-and-students-with-y002.onrender.com/api/mentors', { name, email, expertise });
      fetchMentors();
      setName('');
      setEmail('');
      setExpertise('');
      setNotification('Mentor added successfully!');
      setTimeout(() => setNotification(''), 3000);
    } catch (error) {
      console.error('Error creating mentor:', error);
      setNotification('Error adding mentor. Please try again.');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  return (
    <div className="mentor-list-container">
      <h2 className="mentor-list-title">Mentor</h2>
      {notification && <div className="notification">{notification}</div>}
      <form className="mentor-form" onSubmit={handleSubmit}>
        <input
          className="mentor-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="mentor-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="mentor-input"
          type="text"
          placeholder="Expertise"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
          required
        />
        <button className="mentor-submit-btn" type="submit">ADD MENTOR</button>
      </form>
      <ul className="mentor-list">
        {mentors.map((mentor) => (
          <li className="mentor-item" key={mentor._id}>
            {mentor.name} - {mentor.email} - {mentor.expertise}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MentorList;