import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

class App extends Component {
  render() {
    return (
      <div className="App">

           <LocationList city="Buenos Aires,ar"></LocationList>
        
      </div>
    );
  }
}

export default App;
