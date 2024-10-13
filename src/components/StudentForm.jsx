import React, { useState } from 'react';
import axios from 'axios';

function StudentForm({ fetchStudents }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://assigning-mentor-and-students-with-y002.onrender.com/api/students', { name, email });
      fetchStudents(); // Call to refresh the student list after adding a new student
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        className="student-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="student-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className="student-submit-btn" type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
