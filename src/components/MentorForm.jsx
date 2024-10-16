import React, { useState } from 'react';
import axios from 'axios';
import '../styles/MentorForm.css';

function MentorForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [expertise, setExpertise] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://assigning-mentor-and-students-with-y002.onrender.com/api/mentors', { name, email, expertise });
      setNotification('Mentor created successfully');
      setName('');
      setEmail('');
      setExpertise('');
    } catch (error) {
      console.error('Error creating mentor:', error);
      setNotification('Error creating mentor. Please try again.');
    }
  };

  return (
    
<div className="mentor-form-container">
      <h2 className="mentor-form-title">Create Mentor</h2>
      {notification && <div className="notification">{notification}</div>}
      <form className="mentor-form" onSubmit={handleSubmit}>
        <input
          className="mentor-form-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="mentor-form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="mentor-form-input"
          type="text"
          placeholder="Expertise"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
          required
        />
        <button className="mentor-form-submit" type="submit">Create Mentor</button>
      </form>
    </div>
  );
}

export default MentorForm;