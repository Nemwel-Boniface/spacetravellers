import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => (
  <nav>
    <span className="rocket">Rockets</span>
    <span className="missions">Missions</span>
    <span className="profile">My Profile</span>
  </nav>
);

export default NavBar;
