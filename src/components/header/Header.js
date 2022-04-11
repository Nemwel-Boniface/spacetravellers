import React from 'react';
import NavBar from '../navbar/NavBar';
import logo from '../../planet.png';

const Header = () => (
  <header>
    <div id="logo">
      <img src={logo} alt="logo" />
      <span>Space Travelers Hub</span>
    </div>
    <NavBar />
  </header>
);
export default Header;
