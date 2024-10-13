import React, { useState } from 'react';
import axios from 'axios';

function AssignMentorForm({ students, mentors, fetchStudents }) {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedMentor, setSelectedMentor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAssignMentor = async () => {
    try {
      await axios.put(`https://assigning-mentor-and-students-with-y002.onrender.com/api/students/${selectedStudent}/assign-mentor`, {
        mentorId: selectedMentor,
      });
      fetchStudents(); // Call to refresh the student list after assigning a mentor
      setSelectedStudent('');
      setSelectedMentor('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error assigning mentor:', error);
      setErrorMessage('Error assigning mentor. Please try again.');
    }
  };

  return (
   <div className="assign-mentor-container">
  <div className="select-container">
    <select
      className="student-select"
      value={selectedStudent}
      onChange={(e) => setSelectedStudent(e.target.value)}
    >
      <option value="">Select student</option>
      {students.map((student) => (
        <option key={student._id} value={student._id}>
          {student.name}
        </option>
      ))}
    </select>
    <select
      className="mentor-select"
      value={selectedMentor}
      onChange={(e) => setSelectedMentor(e.target.value)}
    >
      <option value="">Select mentor</option>
      {mentors.map((mentor) => (
        <option key={mentor._id} value={mentor._id}>
          {mentor.name}
        </option>
      ))}
    </select>
  </div>
  <button
    className="assign-mentor-btn"
    onClick={handleAssignMentor}
    disabled={!selectedStudent || !selectedMentor}
  >
    Assign/Change Mentor
  </button>
  {errorMessage && <div className="error-message">{errorMessage}</div>}
</div>

  );
}

export default AssignMentorForm;