import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './weatherLocation';
import './styless.css';

const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city =>{
        console.log("entro " + city);
        onSelectedLocation(city);
    };
    const getCity = cities =>
    (
        cities.map( city => 
        
        <WeatherLocation 
        key={city.key} 
        city={city.name}
        onWeatherLocationClick={ ()=> handleWeatherLocationClick(city.name)}
        data={city.data}/>
        )
    );

   return (
   <div className="LocationList">
       {getCity(cities)}
    </div>
);
}


LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;