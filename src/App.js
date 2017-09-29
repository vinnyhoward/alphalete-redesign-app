import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import router from './router';

class App extends Component {

  render() {
    return (
      <div>
      <Navbar />
      { router }
    </div>
    );
  }
}

export default App;
