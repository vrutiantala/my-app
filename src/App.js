import React, { Component } from 'react';
import logo from './logo.svg';
import image from './online.png';
import './App.css';
import BootStrap from './BootStrap.css'
import axios from "axios";
import Divider from '@material-ui/core/Divider';
//import Fetch from './fetch.js'
import HamMenu from './HamMenu.jsx'
import EpicMenu from './EpicMenu.js'
import NavMenu from './NavMenu';
import MainMenu from './mainmenu.js';
//import { Route } from 'react-router-dom';
import Form from './components/Form.js'
//module.exports = app
//import axios from "axios"
//import Slider from './Slider.js';


// var styles = {
// color:'violet',
// backgroundImage: 'url('./image1.jpg')'
// };

class App extends Component {
  state ={
    isLoading:true,
    users :[],
    error:null
  }
   constructor(props) {
        super(props);
        this.state = {
            listDataFromChild: "welcome"
        };    
    }
    toggleMainMenuDisplay = (whatToShow) => {
        this.setState({ listDataFromChild: whatToShow });
    }
      
  

render() {
            const links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'About', link: '#about' },
      { label: 'Portfolio', link: '#portfolio' },
      { label: 'Contact Us', link: '#contact-us' },
    ];

// row {
 //    animation: App-logo-spin infinite 20 linear;     

  return (
    


    <div class="image">
        
      
      
    <div class="row">

    <div class="col-md-12 col-lg-12 d-none d-md-block"><EpicMenu links={links} logo={logo} showItem="true"/>
    </div> <br />
    <div class="col-xs-12 col-sm-12 d-block d-md-none"><HamMenu links={links} logo={logo} /></div>
  </div>
  <div class="row">
    <div class="col-md-3"><NavMenu callbackFromParent={this.toggleMainMenuDisplay}/> </div>
    <div class="col-md-6"> <MainMenu showItem={this.state.listDataFromChild}/></div>
    <div class="col-md-2"><Form /></div>
  <Divider />
  </div>    
  </div>
  );

}
}
export default App;
