import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Descriptions from './components/Descriptions';

class App extends Component {
  render() {
    return (
      <div className="app-container">
          <Login/>
          <Descriptions/>
      </div>
    );
  }
}

export default App;
