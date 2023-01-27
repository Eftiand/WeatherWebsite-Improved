
import React from 'react'

export const Card = ({minTemp, maxTemp, icon, date}) => {


  return (
    <>
      <div className="text-secondary col border mx-2">
        <p className="h5">{maxTemp} °</p>
        <p className="h5">{minTemp} °</p>
        <p>
          {date}
        </p>
        <img src={icon}/>
      </div>
    </>
  );
}
