import React from 'react';
import WeatherData from './../WeatherLocation/WeatherData';


const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <h2>{weekDay} - {hour} hr</h2>
        <WeatherData data={data}/>
    </div>
)

export default ForecastItem;