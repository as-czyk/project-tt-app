import React from 'react';
import './trips.scss';

export const TripItem = ({ trip }) => {
  const { id, status, seats, text, time, car_type } = trip;

  return (
    <div className='trips__container'>
      <p>{id}</p>
      <p>{status}</p>
      <p>{seats}</p>
      <p>{text}</p>
      <p>{time}</p>
      <p>{car_type}</p>
    </div>
  );
};

export default TripItem;
