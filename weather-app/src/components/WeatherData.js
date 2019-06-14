import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature></WeatherTemperature>
            <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
            
        </div>
    );
};

export default WeatherData;