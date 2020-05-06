import React from 'react';
import './trips.scss';

export const TripItem = ({ trip }) => {
  const {
    journey_id,
    event_id,
    event_start_date,
    event_start_time,
    event_address,
    journey_car,
    journey_data,
    journey_empty_spaces,
    journey_text,
    pickup_zip_code,
    user_id,
  } = trip;

  // push user on details page with the ID of the journey
  // Component takes in props (id)
  return (
    <div className='trips__container'>
      <p>FahrtID: {journey_id}</p>
      <p>Event ID: {event_id}</p>
      <p>Event Adress: {event_address}</p>
      <p>Start Datum: {event_start_date}</p>
      <p>Start Zeit: {event_start_time}</p>
      <p>Auto: {journey_car}</p>
      <p>Freitext:{journey_data}</p>
      <p>Sitze: {journey_empty_spaces}</p>
      <p>Freitext: {journey_text}</p>
      <p>PLZ: {pickup_zip_code}</p>
      <p>User_id: {user_id}</p>
      <button type='submit'>Reservierung anfragen</button>
    </div>
  );
};

export default TripItem;
