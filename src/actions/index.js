import Axios from 'axios';

const API_KEY = '307fb92d2597bf86e425807ff8c4efc1';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url =  `${ROOT_URL}&q=${city},es`
    const request = Axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}