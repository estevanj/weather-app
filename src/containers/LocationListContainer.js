import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions'
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
    setCity: value => dispatch(setCity(value))
})

export default connect(null, mapDispatchToProps)(LocationListContainer)
