import React, { Fragment, useState, useContext } from 'react';
import TripsContext from '../../context/trip/TripContext';
import UserContext from '../../context/user/UserContext';

const OfferTrip = () => {
  const tripContext = useContext(TripsContext);
  const userContext = useContext(UserContext);

  const { user, event } = userContext;

  const [trip, setTrip] = useState({
    pickup_zip_code: '',
    journey_start_time: '',
    journey_car: '',
    journey_text: '',
    journey_empty_spaces: '',
    journey_date: '',
    user_id: user.user.user_id,
    event_address: event.event_address,
    event_id: user.user.event_id,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    tripContext.addTrip(trip);
    setTrip({
      pickup_zip_code: '',
      journey_start_time: '',
      journey_car: '',
      journey_text: '',
      journey_empty_spaces: '',
      journey_date: '',
    });
    return <p>Fahrt erfolgreich submitted</p>;
  };

  const onChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const {
    pickup_zip_code,
    journey_start_time,
    journey_car,
    journey_text,
    journey_empty_spaces,
    journey_date,
  } = trip;

  return (
    <Fragment>
      <h1>Heading for submitting Form</h1>
      <form onSubmit={onSubmit} className='trips__form'>
        <input
          type='text'
          placeholder='Abfahrtsort'
          name='pickup_zip_code'
          value={pickup_zip_code}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Abfahrtszeit'
          name='journey_start_time'
          value={journey_start_time}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Abfahrtsdatum'
          name='journey_date'
          value={journey_date}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Beschreibung'
          name='journey_text'
          value={journey_text}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Car'
          name='journey_car'
          value={journey_car}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Seats'
          name='journey_empty_spaces'
          value={journey_empty_spaces}
          onChange={onChange}
        />
        <button className='btn btn-sumbit'>Submit</button>
      </form>
    </Fragment>
  );
};

export default OfferTrip;
