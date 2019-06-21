import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''

  }

  handleChange = event => {
    this.setState({ first_name: event.target.value }
    this.setState({ last_name: event.target.value }
    this.setState({ email: event.target.value }
    this.setState({ password: event.target.value }
      );
  }

  handleSubmit = event => {
    event.preventDefault();

    const login = {
      first_name: this.state.first_name
      last_name: this.state.last_name
      email: this.state.email
      password: this.state.password
    };

    axios.post(`http://localhost:3001/signup`, { login })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" name="password" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}