import React, {Component} from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import Location from "./Location"
import WeatherData from "./WeatherData";
import "./styles.css";
import transforWeather from "../../services/transforWeather";
import {api_weather} from "./../../constants/api_url";




class WeatherLocation extends Component {

    constructor(){
        super();
        this.state ={
            city: 'Austin',
            data: null,
        };
        console.log("constructor");
        
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
        
    }

    componentDidUpdate(prevProps, prevState) {
        
        console.log("componentDidUpdate");
        
    }

    

    handleUpdateClick = () =>{

        fetch(api_weather).then( resolve =>{
            return resolve.json();
            
        }).then( data =>{
            console.log("rESULTADO HANDLE"); 
            const newWeather = transforWeather(data);
            console.log(newWeather);
            this.setState({
                data: newWeather
            });
            
        });


    }

    render(){
        console.log("RENDER");
        
        const { city, data} = this.state;
         return (
            <div className="weatherLocationCont">
                <Location city={city}></Location> 
                {data ? <WeatherData data={data}></WeatherData> : <LinearProgress size={50}/>}
            </div>
    );
  }
}  

export default WeatherLocation;