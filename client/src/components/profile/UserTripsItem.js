import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import TripContext from '../../context/trip/TripContext';

const UserTripsItem = ({ userTrip }) => {
  const tripContext = useContext(TripContext);
  const { deleteTrip } = tripContext;

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
  } = userTrip;

  const [current, setCurrent] = useState({
    id: journey_id,
    event_id: event_id,
    event_start_time: event_start_time,
    event_start_date: event_start_date,
    event_address: event_address,
    journey_car: journey_car,
    journey_date: journey_date,
    journey_empty_spaces: journey_empty_spaces,
    journey_text: journey_text,
    pickup_zip_code: pickup_zip_code,
    user_id: user_id,
  });

  const tripdelete = () => {
    deleteTrip(current.id);
  };

  return (
    <Fragment>
      <div className='usertrips__container'>
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
        <button onClick={tripdelete}>Delete Trip</button>
        <Link
          to={{
            pathname: '/changeform',
            state: {
              current,
            },
          }}
        >
          Change trip
        </Link>
      </div>
    </Fragment>
  );
};

export default UserTripsItem;
