import React from "react";
import './CurrentWeather.css'

export const CurrentWeather = (props) => {
  if (typeof props.currentWeather.current === "undefined") {
    return;
  }
  console.log(props)

  return (
    <div className="text-center text-light font-standard">
      <h1>
        {props.currentWeather.location.name},{" "}
        {props.currentWeather.location.country}
      </h1>
      <h1 className="mt-3 display-1 font-bold">
        {props.currentWeather.current.temp_c} <span className="span h2">°C</span>
      </h1>
    </div>
  );
};
