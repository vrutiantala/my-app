import React, { Component } from 'react';
import './mainmenu.css';
//import Fetch1 from './components/Fetch1.js'

class MainMenu extends Component{

	  constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showFormss
        });
    }

render()
{
	let searchForm = this.state.showForm ? (
            <form className="form1" method="POST">
                <input className="search-input" placeholder="example:data science" />
            </form>
        ) : '';

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <div className="main1">
            <main>
               <u> <h1>Welcome to online courses</h1></u><br />

                <h5 className="main2"> What Would Yoy Like To Learn?</h5><br/> <br/>
                <form className="form1" method="POST">
                <input className="search-input" placeholder="example:data science" />
            </form><br /><br />
            <h2>Our Most Popolar  Categories</h2>



                  <ul className="nav">
              <li><a href="/button" class="active">Data Science</a></li>
              <li><a href ="/image">Computer Security and Networks</a></li>
        <li><a href="/chip">Web Developement</a></li>
        <li><a href="/button-group" >Software Developement</a></li>
        <li><a href="/icon" >Updates</a></li>
              </ul>
            </main>
            
            </div>

	);
}
}


export default MainMenu;