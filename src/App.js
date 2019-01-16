import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import ForecastExtended from './components/ForecastExtended';
import LocationListContainer from './containers/LocationListContainer'

const cities = [
  'Buenos Aires,ar', 'Madrid,es', 'Lima,pe'
];



class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }




  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
           <LocationListContainer cities={cities}></LocationListContainer>
             </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">

                {!this.state.city ? <h1>No se selecciono ciudad</h1> :
                  <ForecastExtended city={this.state.city} />
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>


    );
  }
}

export default App