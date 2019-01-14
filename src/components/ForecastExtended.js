import React, { Component } from 'react';
import ForecastItem from './ForecastItem'
import transformForecast from './../services/transformForecast'
import './styles.css'

export const api_key = "577ccf4d179e930d4fec6b575ca6c00b";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
  this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null})
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
            ).then(
                weather_data => {
                    const forecastData = transformForecast(weather_data)
                    this.setState({forecastData})
                }
            ) 
    }
    renderForecastItemsDays(forecastData) {
        return forecastData.map(forecast => 
            (<ForecastItem 
                key ={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data} />))
    }

    rederProgress = () => {
        return "Loading"
    }

    render() {
        const { city } = this.props
        const { forecastData } = this.state;
        return (<div>
            <h2 className='forecast-title'>Pronostico de {city} </h2>
            {forecastData ?
                this.renderForecastItemsDays(forecastData)
                : this.rederProgress()}
        </div>);
    }
}

export default ForecastExtended;