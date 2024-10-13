import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AssignMentorList from './pages/AssignMentorList';
import MentorList from './pages/MentorList';
import StudentList from './pages/StudentList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentors" element={<MentorList />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/assign-mentors" element={<AssignMentorList />} />
        </Routes>
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
