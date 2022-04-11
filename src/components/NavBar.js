import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => (
  <nav>
    <span className="rocket"><Link to="/">Rockets</Link></span>
    <span className="missions"><Link to="/missions">Missions</Link></span>
    <span className="profile"><Link to="/myprofile">My Profile</Link></span>
  </nav>
);

export default NavBar;
