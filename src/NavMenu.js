import React, { Component } from 'react';
import './NavMenu.css';

import Fetch from "./components/fetch.js";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//import { Link } from 'react-router-dom';
import MainMenu from './mainmenu.js';
const pStyle = {
  fontSize: '19px',
  fontFamily:'Arial Black',
  lineHeight: '2.5'
};
class NavMenu extends Component {
    
    someFn = (whatToShow) => {
        this.props.callbackFromParent(whatToShow);
    }

    render() {
        return (
  <div className="navigation">
      
    
    <nav>
     
  
  <Router>
    <div>
    
      <ul class="div1">
        <li style={pStyle}>
          <Link to="/fetch" >Course</Link>
        </li>
        <li style={pStyle}>
          <Link to="/image" onClick={()=>this.someFn("accomplishments")}>Accomplishments</Link>
        </li>
        <li style={pStyle}>
          <Link to="/chip" onClick={()=>this.someFn("Recommendationclicked")}>Recommendations</Link>
        </li>
        <li style={pStyle}>
          <Link to="/icon" onClick={()=>this.someFn("Updatesclicked")}>Updates</Link>
        </li>
      </ul>
      
      <Route exact path="/fetch" component={Fetch} />
      <Route exact path="/image" component={MainMenu} />
      
      
    </div>
  </Router>

    </nav>
      
    
  </div>

        );
    }
}




export default NavMenu;