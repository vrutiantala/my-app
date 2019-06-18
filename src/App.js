import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BootStrap from './BootStrap.css'
import axios from "axios";
import Divider from '@material-ui/core/Divider';
//import Fetch from './fetch.js'
import EpicMenu from './EpicMenu.js'
import NavMenu from './NavMenu';
import MainMenu from './mainmenu.js';
//import { Route } from 'react-router-dom';
import Form from './components/Form.js'
//module.exports = app
//import axios from "axios"
;
class App extends Component {
  state ={
    isLoading:true,
    users :[],
    error:null
  }


render() {
            let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'About', link: '#about' },
      { label: 'Portfolio', link: '#portfolio' },
      { label: 'Contact Us', link: '#contact-us' },
    ];

// row {
 //    animation: App-logo-spin infinite 20 linear;     

  return (


    <div>
    <div class="row">
  <div class="col-md-12" ><EpicMenu links={links} logo={logo} /></div>
</div>
<div class="row">
  <div class="col-md-3"><NavMenu /> </div>
  <div class="col-md-6"> <MainMenu links={links} /></div>
  <div class="col-md-3"> <Form /></div>
  <Divider />
</div>
</div>
        );

}
}
export default App;
