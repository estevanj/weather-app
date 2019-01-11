import React, { Component } from 'react';
import ForecastItem from './ForecastItem'
import './styles.css'

const days =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueces',
    'Viernes',
];
const data ={
    temperature: 10,
    humidity:10,
    weatherState : 'Normal',
    wind: 'normal'
}

class ForecastExtended extends Component {
    renderForecastItemsDays(){
        return days.map(day => (  <ForecastItem weekDay = {day} hour = {10}  data={data}/> ))
    }
      

    render() {
        const { city } = this.props
        return (<div>
            <h2 className = 'forecast-title'>Pronostico de {city} </h2>
           {this.renderForecastItemsDays()}
        </div>);
    }
}

export default ForecastExtended;