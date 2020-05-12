import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import './trips.scss';

const TripItem = ({ trip }) => {
  const userContext = useContext(UserContext);

  const [current, setCurrent] = useState({
    id: '',
  });

  useEffect(() => {
    setCurrent({
      id: journey_id,
      user_id: userContext.user.user.user_id,
    });
  }, []);

  const {
    journey_id,
    event_id,
    event_start_date,
    event_start_time,
    event_address,
    journey_car,
    journey_date,
    journey_empty_spaces,
    journey_text,
    pickup_zip_code,
    user_id,
  } = trip;

  return (
    <div className='trips__container'>
      <p>FahrtID: {journey_id}</p>
      <p>Event ID: {event_id}</p>
      <p>Event Adress: {event_address}</p>
      <p>Start Datum: {event_start_date}</p>
      <p>Start Zeit: {event_start_time}</p>
      <p>Auto: {journey_car}</p>
      <p>Date: {journey_date}</p>
      <p>Sitze: {journey_empty_spaces}</p>
      <p>Freitext: {journey_text}</p>
      <p>PLZ: {pickup_zip_code}</p>
      <p>User_id: {user_id}</p>
      <Link
        to={{
          pathname: '/tripsreservation',
          state: {
            current,
          },
        }}
      >
        Click me
      </Link>
    </div>
  );
};

export default TripItem;
