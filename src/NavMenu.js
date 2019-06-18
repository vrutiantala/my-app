import React, { Component } from 'react';
import './NavMenu.css';

import Fetch from "./components/fetch.js";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//import { Link } from 'react-router-dom';
const pStyle = {
  fontSize: '19px',
  fontFamily:'Arial Black',
  lineHeight: '2.5'
};
class NavMenu extends Component {
    

    render() {
        return (
  <div className="navigation">
      
    <div className="logoWrapper">
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-card.png" height="100" alt="logo" />
    </div>
    <nav>
     
  
  <Router>
    <div>
    
      <ul class="div1">
        <li style={pStyle}>
          <Link to="/fetch">Course</Link>
        </li>
        <li style={pStyle}>
          <Link to="/image">Accomplishments</Link>
        </li>
        <li style={pStyle}>
          <Link to="/chip">Recommendations</Link>
        </li>
        <li style={pStyle}>
          <Link to="/button-group">Acknowledgements</Link>
        </li>
        <li style={pStyle}>
          <Link to="/icon">Updates</Link>
        </li>
      </ul>
      
      <Route exact path="/fetch" component={Fetch} />
      
      
    </div>
  </Router>

    </nav>
      
    
  </div>

        );
    }
}




export default NavMenu;