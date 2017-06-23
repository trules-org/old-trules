import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const EventList = () =>
     (<span>
       <h3> Events </h3>
        <ul>
          <li>Order Placed</li>
          <li>Order Canceled</li>
        </ul>
     </span>);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to trules</h2>
        </div>
        < EventList />
      </div>
    );
  }
}

export default App;
