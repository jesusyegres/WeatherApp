import React, {Component} from 'react';
import {Grid,Col,row, Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Buenos Aires,ar',
  'caracas,ve',
  'barcelona,es',
  'washington,us',
  'madrid,es'
]

class App extends Component{
  
  handleSelectionLocation = city =>{
    console.log("handleSelectionLocation");
  }
  render(){
    return (
          <Grid>
          <Row>

          </Row>
          <Row>
          <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}/>
          </Row>
           </Grid>
    );

  }

}

export default App;
