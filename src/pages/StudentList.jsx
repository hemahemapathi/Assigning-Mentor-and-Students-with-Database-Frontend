import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from '../components/StudentForm.jsx';
import '../App.css';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://assigning-mentor-and-students-with-y002.onrender.com/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = () => {
    setNotification('Student added successfully!');
    setTimeout(() => setNotification(''), 3000);
    fetchStudents();
  };

  return (
    <div className="student-list-container">
      <h2 className="student-list-title">Students</h2>
      
      {notification && <div className="notification">{notification}</div>}
      
      {/* StudentForm Component */}
      <StudentForm fetchStudents={handleAddStudent} />
      
      <ul className="student-list">
        {students.map((student) => (
          <li className="student-item" key={student._id}>
            {student.name} - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
