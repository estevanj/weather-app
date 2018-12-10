import React from 'react';
import WeatherIcons from 'react-weathericons';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WYNDY,
} from './../constants/weathers';

const icons ={
    [CLOUD]: "cloud" ,
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WYNDY]: "windy",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon){
        return    <WeatherIcons name={icon} size="2x"/>
    }
    return    <WeatherIcons name={"day-sunny"} size="2x"/>
};
const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
      {getWeatherIcon(weatherState)}
        <span>
            {`${temperature}  C`}
        </span>
    </div>
);

export default WeatherTemperature;