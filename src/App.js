import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
  
       
           <WeatherLocation></WeatherLocation>
        
      </div>
    );
  }
}

export default App;
