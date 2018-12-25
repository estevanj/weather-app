import React, { Component }  from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import { api_weather } from './../../constants/api_url'
import './style.css';
import transformWeather from './../../services/transfotmWeather'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

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

    handleIpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
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