import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { createStore} from 'redux';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Grid,Col, Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Buenos Aires,ar',
  'caracas,ve',
  'barcelona,es',
  'washington,us',
  'madrid,es'
]

const store = createStore(() =>{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTESION__());

class App extends Component{

  constructor(){
    super();
    this.state = { city: null}
  }
  
  handleSelectionLocation = city =>{
    this.setState({
      city
    });
    console.log(`handleSelectionLocation ${city}`);
    const action = { type:'setCity', value: city}
    store.dispatch(action)
  }


  render(){
    const {city} = this.state;
    return (
          <Grid>
          <Row>
          <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h4" color="inherit">
                WeatherApp
                </Typography>
            </Toolbar>
        </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <LocationList 
            cities={cities} 
            onSelectedLocation={this.handleSelectionLocation}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
              <div className="details">
                {city === null ? 
                null:
                <ForecastExtended city={city}/>
                }
              </div>
              </Paper>
            </Col>
          </Row>
           </Grid>
    );

  }

}

export default App;
