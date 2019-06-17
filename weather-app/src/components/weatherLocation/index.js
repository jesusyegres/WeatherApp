import React, {Component} from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import Location from "./Location"
import WeatherData from "./WeatherData";
import "./styles.css";
import transforWeather from "../../services/transforWeather";
import PropTypes from 'prop-types';
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity";



class WeatherLocation extends Component {

    constructor(props){
        super(props);

        const {city} = props;

        this.state ={
            city,
            data: null,
        };
  
        
    }

    componentDidMount() {
  
        this.handleUpdateClick();
        
    }

    componentDidUpdate(prevProps, prevState) {
        
        
        
    }

    

    handleUpdateClick = () =>{

        const api_weather = getUrlWeatherByCity(this.state.city);

        fetch(api_weather).then( resolve =>{
            return resolve.json();
            
        }).then( data =>{
            const newWeather = transforWeather(data);
            this.setState({
                data: newWeather
            });
            
        });


    }

    render(){
        const {onWeatherLocationClick} = this.props;
        const { city, data} = this.state;
         return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location> 
                {data ? <WeatherData data={data}></WeatherData> : <LinearProgress size={50}/>}
            </div>
    );
  }
}  

WeatherLocation.propTypes ={
    city : PropTypes.string.isRequired,
    onWeatherLocationClick:PropTypes.func,
}

export default WeatherLocation;