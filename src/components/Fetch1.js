import React from "react";
import axios from "axios";

class Fetch1 extends React.Component {
  constructor() {
    super();
    this.state = { login: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    // On submit of the form, send a POST request with the data to the server.
    fetch('/login', { 
        method: 'POST',
        data: {
          first_name: self.refs.first_name,
          last_name: self.refs.last_name,
          email:self.refs.email,
          password:self.refs.password
        }
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder="first_name" ref="name"/>
        <input type="text" placeholder="last_name" ref="last_name"/>
        <input type="text" placeholder="email" ref="email"/>
        <input type="text" placeholder="password" ref="password"/>
        <input type="submit" />
      </form>
    );
  }
}

export default Fetch1;