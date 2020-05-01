import React from 'react';
import './weather.scss';

const Weather = () => {
  return (
    <div className='weather__container'>
      <div className='weather__img'>
        <p>Weather Image</p>
      </div>
      <div className='weather__inf'>
        <p>Weather Info</p>
        <p>
          Information zum Wetter am Eventtag bzw. zur Uhrzeit; openweatherapi
        </p>
      </div>
    </div>
  );
};

export default Weather;
