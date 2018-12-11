import React from 'react'
import PropTypes from 'prop-types';

const Location = (props) => {
    //Destructuring  ES6
    const { city } = props;

    return (<div><h1>{city}</h1></div>);
};

Location.propTypes ={
    city:PropTypes.string.isRequired,
}

export default Location;