import React from 'react';
import WeatherLocation from './WeatherLocation';
import './styles.css'


const LocationList = ({ cities, onSelectedLocation }) =>{
const handleWeatherLocation = city =>{
  onSelectedLocation(city);
};

  const strToComponents = cities =>(
    cities.map( city => 
    (<WeatherLocation key ={city} city = {city}
      onWeatherLocationClick = {() => handleWeatherLocation(city)}
    />))  
  );

    return (<div className="LocationList">
    {strToComponents(cities)}    
    </div>)
   };
export default LocationList;