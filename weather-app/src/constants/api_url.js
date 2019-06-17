const location = "london,uk";
const api_key = "8397be7c2629753adf7bb678899a2d3a";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
