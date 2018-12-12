import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtrainfoCont">
        <span className="extreInfoText">{`Humedad: ${humidity} %`}</span>
        <span className="extreInfoText">{`Viento: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes ={
    humidity : PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;