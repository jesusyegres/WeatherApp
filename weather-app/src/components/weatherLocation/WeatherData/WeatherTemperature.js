import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from "../../../constants/weather";
import "./styles.css";

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers",
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size="2x"></WeatherIcons>
    else 
    return <WeatherIcons className="wicon" name={"day-sunny"} size="2x"></WeatherIcons>
}

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div className="WeatherTemperatureCont">
            {
                getWeatherIcon(weatherState)
            }
            <span className="temperature">{`${temperature}`}</span>
            <span className="temperatureType">{`˚C`}</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;