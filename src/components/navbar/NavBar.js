import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => (
  <nav className="navbar">
    <span className="rocket">Rockets</span>
    <span className="missions">Missions</span>
    <span className="profile"><NavLink to="/myprofile">My Profile</NavLink></span>
  </nav>
);

export default NavBar;
