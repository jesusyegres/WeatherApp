import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: "day-sunny",
    fog: "day-fog",
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    
    if (icon)
        return <WeatherIcons name={icon} size="2x"></WeatherIcons>
    else 
    return <WeatherIcons name={"day-fog"} size="2x"></WeatherIcons>
}

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div>
            {
                getWeatherIcon(weatherState)
            }
            <span>{`${temperature} Grados`}</span>
        </div>
    );
};

export default WeatherTemperature;