import { api_key, url_base_forecast,url_base_weather } from '../constants/api_url';
import transforForecast from './../services/transforForecast';
import transforWeather from '../services/transforWeather';
export const SET_CITY = 'SET-CITY';

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY= 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY= 'SET_WEATHER_CITY';

export const setCity = payload => ({type:SET_CITY,payload});
export const setForecastData = payload =>({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload =>({type:GET_WEATHER_CITY,payload});
const setWeatherCity = payload =>({type:SET_WEATHER_CITY,payload});

export const setSelectedCity = payload => {


        return dispatch =>{

            const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
            
            // activar en el estado un indicador de busqueda de datos
            dispatch(setCity(payload));
            return fetch(url_forecast).then(
                data => (data.json())
            ).then(
                weather_data => { 
                    const forecastData = transforForecast(weather_data);
                    console.log(forecastData);
                    
                    //modificar el estado con el resultado de la promise (fetch)
                    dispatch(setForecastData({city:payload,forecastData}))
                }
            )

        };
};

export const setWeather = payload =>{

    return dispatch =>{
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}`;
            fetch(api_weather).then(data =>{
            return data.json();
            }).then(weather_data => {
                const weather = transforWeather(weather_data);
                dispatch(setWeatherCity({city,weather}));
            })
        });
    }

}