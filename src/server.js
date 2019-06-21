const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'localhost',
user:'root',
password:'password',//password of your mysql db
database:'Course_name'
});
require('./routes/html-routes')(app, connection);

connection.connect(function(err){
(err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
});



import React, { Component } from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import createHistory from "history/createBrowserHistory"

//import isLoggedIn from '../../helpers/is_logged_in';
class Login extends Component {


   constructor(props) {
    const history = createHistory();
      super(props);

     // this.islogin = this.islogin.bind(this);
      this.signIn = this.signIn.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.state = {
        email:'',
        password:'',
        redirectToReferrer: false

      };
    }
    signIn(){

      const history = createHistory()
      const location = history.location;
              console.log(location);


    //  alert(this.state.email);
      axios.post('http://192.168.1.35:3012/users', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
       // console.log(response.data[0].id);
       // console.log(response.data.email);
        var das =  localStorage.setItem('sessionid', response.data[0].id);
        var das =  localStorage.setItem('myData', response.data[0].name);
       var da =  localStorage.getItem('myData');
      var myid =  sessionStorage.setItem('myid', response.data[0].id);
      //alert(da);
       //history.go('/dash');
       
      })

      .catch(function (error) {
        console.log(error);
      });

       this.setState({ redirectToReferrer: true });
    }


    handleEmailChange(e){
      this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value})
}

  render() {
    console.log('11111');
          const myid =  sessionStorage.getItem('myid');
      const { from } = this.props.location.state || { from: { pathname: "/dash" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer || myid !=null) {
          console.log('22222');

      return <Redirect to={from} />;
    }

else{

    return (
            <form className="form-signin" history={this.props.history}>
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label className="sr-only"> Email address
                </label>
}
<input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required />              
  <label htmlFor="inputPassword" className="sr-only"> Password</label>

<input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />  

<button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>            
            </form> 
    );
  }
}
}
export default withRouter(Login); 

 