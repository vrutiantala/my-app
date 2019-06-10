import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EpicMenu from './EpicMenu.js'
import NavMenu from './NavMenu';
import MainMenu from './mainmenu.js';
import { Route } from 'react-router-dom'

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

  return (
    <div className="container center">
        <EpicMenu links={links} logo={logo} />
        <MainMenu links={links} />
        <NavMenu />
        
        </div>
        );

}
}
export default App;
