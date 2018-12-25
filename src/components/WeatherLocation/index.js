import React, { Component }  from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './style.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "577ccf4d179e930d4fec6b575ca6c00b";
const url_base_weather="http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q= ${location}&appid=${api_key}&units=metric`;

const data ={
    temperature: 5,
    weatherState: SUN,
    humidity: 20,
    wind : '10 m/s',
}

class  WeatherLocation extends Component{
    constructor(){
        super();
        this.state ={
            city: 'Buenos Aires',
            data: data,
        }
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const {humidity, temp} =weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data ={
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }

    handleIpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            this.setState ({
                data: newWeather
            });
        });      
    }

    render() {
        return (
            <div className="weatherLocationCont">
            <Location city={this.state.city}></Location>
            <WeatherData data= {this.state.data}></WeatherData>
            <button onClick= {this.handleIpdateClick}>Actualizar</button>
            </div>
        )
    }
  
};

export default WeatherLocation;