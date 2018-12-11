import React from 'react';
import WheatherExtraInfo from './WeatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataCont"> 
        <WheatherTemperature temperature ={30} weatherState={RAIN}></WheatherTemperature>
        <WheatherExtraInfo humidity= {80} wind={"10 m/s"}></WheatherExtraInfo>
    </div>
);

export default WeatherData;