import React from 'react';
import WheatherExtraInfo from './WeatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WYNDY,
} from './../constants/weathers';

const WeatherData = () => (
    <div> 
        <WheatherTemperature temperature ={20} weatherState={RAIN}></WheatherTemperature>
        <WheatherExtraInfo humidity= {80} wind={"10 m/s"}></WheatherExtraInfo>
    </div>
);

export default WeatherData;