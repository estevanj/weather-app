import React, { Component }  from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { api_weather } from './../../constants/api_url';
import './style.css';
import transformWeather from './../../services/transfotmWeather';

class  WeatherLocation extends Component{
    constructor(){
        super();
        this.state ={
            city: 'Buenos Aires',
            data: null,
        }
    }

    componentDidMount(){
        this.handleIpdateClick();
    }

    componentDidUpdate(prevProps, prevState){

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
        const { city, data} = this.state
        return (
            <div className="weatherLocationCont">
            <Location city={city}></Location>
           {data ? <WeatherData data= {data}></WeatherData> 
           : "cargando..."
           }   
           </div>
        )
    }
  
};

export default WeatherLocation;