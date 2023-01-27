
import {useState, useEffect} from 'react'
import { Header } from '../components/Header/Header';
import {
  currentWeatherFetchApi,
  forecastWeatherFetchApi,
} from "../services/weatherFetchApi";
import { BodyContainer } from './BodyContainer';


export const MainContainer = () => {

    const [currentWeather, setCurrentWeather] = useState({});
    const [forecastWeather, setForecastWeather] = useState([]);

    const [city, setCity] = useState('Stockholm');



    useEffect(() => {
        currentWeatherFetchApi(city).then((data) => {
            if(data.error) {
                return;
            }
            setCurrentWeather(data);
        });

        forecastWeatherFetchApi(city).then((data) => {
            if(data.error) {
                return;
            }
            setForecastWeather(data);
        });
        

    }, [city])

    const searchCity = (city) => {
        setCity(city);
    }
  return (
    <>
      <Header callback={searchCity} currentWeather={currentWeather} />
      <BodyContainer forecastWeather={forecastWeather}/>
    </>
  );
}
