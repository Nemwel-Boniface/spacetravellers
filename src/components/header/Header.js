import React from 'react';
import NavBar from '../navbar/NavBar';
import logo from '../../planet.png';
import './header.css';

const Header = () => (
  <header className="header">
    <div id="logo">
      <img src={logo} alt="logo" />
      <span>Space Travelers Hub</span>
    </div>
    <NavBar />
  </header>
);
export default Header;
