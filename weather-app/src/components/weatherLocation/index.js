import React, {Component} from "react";
import Location from "./Location"
import WeatherData from "./WeatherData";
import "./styles.css";
import {
    SNOW,
    SUN,
} from "../../constants/weather";

const data = {
    temperature: 5,
    weatherState: SNOW,
    humidity: 10,
    wind:"11 m/s",
}

const data2 = {
    temperature: 50,
    weatherState: SUN,
    humidity: 20,
    wind:"19 m/s",
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state ={
            city: 'Austin',
            data: data,
        };
    }

    handleUpdateClick = () =>{
        console.log("actualizado");
        this.setState({
            city: 'Puerto Ordaz',
            data:data2,
        })

        
        
    }

    render(){
        const { city, data} = this.state;
         return (
            <div className="weatherLocationCont">
                <Location city={city}></Location> 
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
    );
  }
}  

export default WeatherLocation;