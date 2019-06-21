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

         if (this.props.showItem == "welcome")
        {    
        return (
            <div className="main1">
            <main>
               <u> <h1>Welcome to online courses</h1></u ><br />

                <h5 className="main2"> What Would You Like To Learn?</h5><br/> <br/>
                <form className="form1" method="POST">
                <input className="search-input" placeholder="example:data science" />
            </form><br /><br />
            <h2>Our Most Popolar  Categories</h2>



                  <ul className="nav">
              <li><a href="/button" >Data Science</a></li>
              <li><a href ="/image">Computer Security and Networks</a></li>
        <li><a href="/chip">Web Developement</a></li>
        <li><a href="/button-group" >Software Developement</a></li>
        <li><a href="/icon" >Artificial Intelligence</a></li>
              </ul>
            </main>
            
            </div>
            );

        }
        else if(this.props.showItem == "accomplishments")
        {
         return (
            <div className="main10">
            <main>
                <p>Together, we have pioneered innovative initiatives like MicroMasters programs, which are bridging the gap between academia and the corporate world in a groundbreaking way, and we have pushed the boundaries of making world-class education accessible and affordable. You have shared your stories with us of how taking the courses and programs offered by our partners have helped to transform your lives and advance your careers.

                   Because of you, the mission has transformed from a statement into a movement.</p><br />

                
            </main>
            
            </div>

    );            
        }

    else if (this.props.showItem == "Recommendationclicked")
        {    
        return (
            <div className="main10">
            <main>
                <p>CHARUSAT ACADEMY is recommended by the topmost universities in world,and some of them are:<br /><br/>
                    1)Harvad University<br/>
                    2)MIT<br/>
                    3)Stanford University<br/>
                    4)Universityof Oxford</p><br />

                
            </main>
            
            </div>
            );

        }
        else if (this.props.showItem == "Updatesclicked")
        {    
        return (
            <div className="main10">
            <main>
                <p>We are going to introduce courses other than Computer field.Fields like Mechanical,Civil,Designing,Bussiness Management and Electrical.And we are also going to launch more courses related to Computer Field also.</p><br />

                
            </main>
            
            </div>
            );

        }
        else
         return null;
}
}


export default MainMenu;