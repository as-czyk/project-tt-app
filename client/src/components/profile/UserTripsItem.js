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

  const [current] = useState({
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
        <div className='usertrips__container__info'>
          <p>Car: {journey_car}</p>
          <p>Pick-up Date: {journey_date}</p>
          <p>Available seats: {journey_empty_spaces}</p>
          <p>Pick-up Location: {pickup_zip_code}</p>
        </div>
        <div className='usertrips__container__text'>
          <p>Message for your passengers:</p>
          <p>{journey_text}</p>
          <div className='usertrips__container__button'>
            <Link
              to={{
                pathname: '/changeform',
                state: {
                  current,
                },
              }}
            >
              <button className='button__sge__2'>Update Trip</button>
            </Link>
            <button className='button__sge__1' onClick={tripdelete}>
              {' '}
              Delete Trip
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserTripsItem;
