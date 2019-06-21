import moment from "moment";
import 'moment/locale/es';
import transforWeather from "./transforWeather";

const transforForecast = data => (
    data.list.filter( item => (
        moment.unix(item.dt).utc().hour() === 6 || 
        moment.unix(item.dt).utc().hour() === 12 || 
        moment.unix(item.dt).utc().hour() === 18
    )).map( item => (
        {
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transforWeather(item)
        }    
    ))
);

export default transforForecast;