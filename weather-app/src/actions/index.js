import { api_key, url_base_forecast } from '../constants/api_url';
import transforForecast from './../services/transforForecast';
export const SET_CITY = 'SET-CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const setCity = payload => ({type:SET_CITY,payload});

export const setForecastData = payload =>({ type: SET_FORECAST_DATA, payload });

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