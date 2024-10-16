import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
<nav className="navbar" position="top-right">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link"><b>HOME</b></Link></li>
        <li className="navbar-item"><Link to="/mentors" className="navbar-link"><b>MENTORS</b></Link></li>
        <li className="navbar-item"><Link to="/students" className="navbar-link"><b>STUDENTS</b></Link></li>
        <li className="navbar-item"><Link to="/assign-mentors" className="navbar-link"><b>ASSIGN/CHANGE MENTOR</b></Link></li>
        
      </ul>
    </nav>    
  );
}

export default Navbar;