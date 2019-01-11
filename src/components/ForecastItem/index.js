import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';

const data ={
    temperature: 10,
    humidity:10,
    weatherState : 'Normal',
    wind: 'normal'
}

const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <div>{weekDay} Hora: {hour}</div>
        <WeatherData data={data}/>
    </div>
)

export default ForecastItem;