import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
fetch('http://127.0.0.1:3005/') //, {mode: 'no-cors'}
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                console.log(data);
            }).catch(function (err) {
                console.log(err)
            })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
