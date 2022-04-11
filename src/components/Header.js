import React from 'react';
import NavBar from './NavBar';

const Header = () => (
  <header>
    <div id="logo">
      <img src="../../planets.png" alt="logo" />
      <span>Space Travelers Hub</span>
    </div>
    <NavBar />
  </header>
);
export default Header;
