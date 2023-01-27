import {appInfo} from '../settings/appinfo.js';


export const currentWeatherFetchApi = async (city) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=${appInfo.apiKey}&q=${city}`;

    return await fetch(url).then(response => response.json());

}

export const forecastWeatherFetchApi = async (city) => {
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${appInfo.apiKey}&q=${city}&days=6`;

    return await fetch(url).then(response => response.json());
}
