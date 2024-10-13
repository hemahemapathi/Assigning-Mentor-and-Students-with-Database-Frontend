// AssignMentorList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AssignMentorForm from '../components/AssignMentorForm.jsx';
import '../App.css';

function AssignMentorList() {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    fetchStudents();
    fetchMentors();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://assigning-mentor-and-students-with-y002.onrender.com/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const fetchMentors = async () => {
    try {
      const response = await axios.get('https://assigning-mentor-and-students-with-y002.onrender.com/api/mentors');
      setMentors(response.data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  const getMentorName = (mentorId) => {
    const mentor = mentors.find(m => m._id === mentorId);
    return mentor ? mentor.name : 'Not assigned';
  };

  const handleAssignMentor = () => {
    setNotification('Mentor assigned successfully!');
    setTimeout(() => setNotification(''), 3000);
    fetchStudents();
  };

  return (
    <div className="assign-mentor-list-container">
      <h2>Assign/Change Mentor</h2>
      {notification && <div className="notification">{notification}</div>}
      <AssignMentorForm students={students} mentors={mentors} fetchStudents={handleAssignMentor} />
      <ul className=" student-list">
        {students.map((student) => (
          <li key={student._id} className="student-item">
            {student.name} - {student.email} - Mentor: {getMentorName(student.mentor)}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default AssignMentorList;
