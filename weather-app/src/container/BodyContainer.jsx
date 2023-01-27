
import React from 'react'
import { Card } from '../components/Card/Card';

export const BodyContainer = ({forecastWeather}) => {

    if (typeof forecastWeather.forecast === "undefined") {
        return;
    }

    const forecast = forecastWeather.forecast.forecastday;
    console.log(forecast);
    const forecastList = forecast.map((day,index) => {
        return (
            <Card
              key={index}
              minTemp={day.day.mintemp_c}
              maxTemp={day.day.maxtemp_c}
              icon={day.day.condition.icon}
              date={day.date}
            />
        );
    })


  return (
    <div className='container'>
        <div className="row">
            {forecastList}
        </div>
    </div>
  )
}
