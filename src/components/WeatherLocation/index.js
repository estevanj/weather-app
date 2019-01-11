import React, { Component }  from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import getUrlByCity from './../../services/getUrlbyCity'
import './style.css';
import transformWeather from './../../services/transfotmWeather';

class  WeatherLocation extends Component{
    constructor(props){
        super(props);
        const { city } = props;
        this.state ={
            city,
            data: null,
        }
    }

    componentDidMount(){
        this.handleIpdateClick();
    }

    componentDidUpdate(prevProps, prevState){

    }

    handleIpdateClick = () => {
         const api_weather = getUrlByCity(this.state.city);
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
        const { onWeatherLocationClick } = this.props;
        const { city, data} = this.state
        return (
            <div className="weatherLocationCont" onClick = {onWeatherLocationClick}>
            <Location city={city}></Location>
           {data ? <WeatherData data= {data}></WeatherData> 
           : <CircularProgress size={50}/>
           }   
           </div>
        )
    }
  
}

export default WeatherLocation;