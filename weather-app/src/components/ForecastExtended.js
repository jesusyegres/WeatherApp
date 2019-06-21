import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecasteItem';
import './styless.css';
import { api_key, url_base_forecast } from '../constants/api_url';
import transforForecast from '../services/transforForecast';


/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data = {
    temperature:10,
    humidity:10,
    weatherState: 'normal',
    wind:'normal',

}

*/

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount(){
        //fetch or axios
       this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps){
            if(nextProps.city !== this.props.city){
                this.setState({forecastData: null})
                this.updateCity(nextProps.city)
            }
    }

    updateCity = city =>{
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);  
                const forecastData = transforForecast(weather_data);
                console.log(forecastData);
                this.setState({
                    forecastData
                })
            }
        )
    }

    renderForecastItemDays(forecastData) {
       return forecastData.map( forecast =>
           (<ForecastItem   key={`${forecast.weekDay}${forecast.hour}`}
                            weekDay={forecast.weekDay}   
                            hour={forecast.hour} 
                            data={forecast.data}></ForecastItem>));
    }



    renderProgress = () =>{
        return <h3>"cargando Pronostico extendido .. "</h3>;
    }

    render() {

        const {city}= this.props;

        const { forecastData } = this.state

        return (

            <div >
                <h2 className="forecast-title">Pronostico extendido para {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
            
        );
    }
}

ForecastExtended.propTypes = {
    city:PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;