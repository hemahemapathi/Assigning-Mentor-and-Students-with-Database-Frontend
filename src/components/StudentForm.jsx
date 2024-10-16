import React, { useState } from 'react';
import axios from 'axios';
import '../styles/StudentForm.css';

function StudentForm({ fetchStudents }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://assigning-mentor-and-students-with-y002.onrender.com/api/students', { name, email });
      fetchStudents(); // Call to refresh the student list after adding a new student
      setName('');
      setEmail('');
      setNotification('Student added successfully');
    } catch (error) {
      console.error('Error creating student:', error);
      setNotification('Error adding student');
    }
  };

  return (
    <div className="student-form-container">
      <h2 className="student-form-title">Add Student</h2>
      {notification && <div className="notification">{notification}</div>}
      <form className="student-form" onSubmit={handleSubmit}>
        <input
          className="student-form-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="student-form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="student-form-submit" type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
