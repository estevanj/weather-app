import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedCity } from './../actions'
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.setCity(city)
    }

    render() {
        return (
            <LocationList cities={this.props.cities}
                onSelectedLocation={this.handleSelectionLocation}></LocationList>

        )
    }
}


const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
})

export default connect(null, mapDispatchToProps)(LocationListContainer)
