import React from 'react';
import WheatherExtraInfo from './WeatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';

const WeatherData = () => (
    <div> 
        <WheatherTemperature></WheatherTemperature>
        <WheatherExtraInfo humidity= {80} wind={"10 m/s"}></WheatherExtraInfo>
    </div>
);

export default WeatherData;