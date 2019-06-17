import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './weatherLocation';

const getCity = cities =>(
    cities.map( city => <WeatherLocation key={city} city={city}/>)
)
const LocationList = ({cities}) => {
   return (
   <div>
       {getCity(cities)}
    </div>
);
}


LocationList.proTypes ={
    cities: PropTypes.array.isRequired,
};

export default LocationList;