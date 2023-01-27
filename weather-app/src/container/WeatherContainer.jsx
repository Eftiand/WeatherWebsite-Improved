
import {useState, useEffect} from 'react'
import { Header } from '../components/Header';
import {
  currentWeatherFetchApi,
  forecastWeatherFetchApi,
} from "../services/weatherFetchApi";

export const WeatherContainer = () => {

    const [currentWeather, setCurrentWeather] = useState({});
    const [forecastWeather, setForecastWeather] = useState([]);

    const [city, setCity] = useState('Stockholm');

    useEffect(() => {

        currentWeatherFetchApi(city).then((data) => {
            setCurrentWeather(data);
        });

        forecastWeatherFetchApi(city).then((data) => {
            setForecastWeather(data);
        });
        
        console.log(forecastWeather);
        console.log(currentWeather);

    }, [city])

    const searchCity = (city) => {
        setCity(city);
    }
  return (
    <>
      <Header callback={searchCity} />
    </>
  );
}
