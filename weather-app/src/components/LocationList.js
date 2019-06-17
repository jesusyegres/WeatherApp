import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './weatherLocation';


const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city =>{
        console.log("entro " + city);
        onSelectedLocation(city);
    };
    const getCity = cities =>
    (
        cities.map( city => 
        
        <WeatherLocation 
        key={city} 
        city={city}
        onWeatherLocationClick={ ()=> handleWeatherLocationClick(city)}/>
        )
    );

   return (
   <div>
       {getCity(cities)}
    </div>
);
}


LocationList.proTypes ={
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;