import React from 'react';
import './trips.scss';

export const TripItem = ({ trip }) => {
  const { id, status, seats, text, time, car_type, meeting_point } = trip;
  // push user on details page with the ID of the journey
  // Component takes in props (id)
  return (
    <div className='trips__container'>
      <p>FahrtID: {id}</p>
      <p>Status der Fahrt: {status}</p>
      <p>Anzahl der Sitze: {seats}</p>
      <p>Frei-Text: {text}</p>
      <p>Abfahrszeitpunkt: {time}</p>
      <p>Fahrzeugtyp:{car_type}</p>
      <p>Abfahrtort: {meeting_point}</p>
      <button type='submit'>Reservierung anfragen</button>
    </div>
  );
};

export default TripItem;
