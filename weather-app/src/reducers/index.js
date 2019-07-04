import { combineReducers } from "../../../../../../../Library/Caches/typescript/3.5/node_modules/redux";
import { cities, getForecastDataFromCities as _getForecastDataFromCities,
    getWeatherCities as _getWeatherCities } from "./cities";
import { city } from "./city";
import { createSelector } from 'reselect';

export default combineReducers({
    cities,
    city
});

export const getCity = createSelector( state => state.city, city =>city);

export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);