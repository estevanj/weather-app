import React from 'react';
import WheatherExtraInfo from './WeatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';
import './styles.css';
import PropTypes from 'prop-types';

const WeatherData = ( { data:{ temperature, weatherState, humidity, wind } }) => {
   return ( <div className="weatherDataCont"> 
        <WheatherTemperature temperature ={temperature} weatherState={weatherState}></WheatherTemperature>
        <WheatherExtraInfo humidity= {humidity} wind={wind}></WheatherExtraInfo>
    </div>)
};
WeatherData.propsTypes ={
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity:PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired, 
    }
    )
}

export default WeatherData;