import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    <nav>
        <span className="rocket"><Link to="/">Rockets</Link></span>
        <span className="missions"><Link to="/">Missions</Link></span>
        <span className="profile"><Link to="/">My Profile</Link></span>
    </nav>
};
