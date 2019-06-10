import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="logoWrapper">
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-card.png" height="100" alt="logo" />
    </div>
    <nav>
      <ul className="nav">
        <li><NavLink exact to="/">Courses</NavLink></li>
        <li><NavLink to="/button">Resources</NavLink></li>
        <li><NavLink to="/button-group">Acknowledgements</NavLink></li>
        <li><NavLink to="/icon">Updates</NavLink></li>
        <li><NavLink to="/image">Accomplishments</NavLink></li>
        <li><NavLink to="/chip">Recommendations</NavLink></li>
              </ul>
    </nav>
  </div>
);

export default Navigation;