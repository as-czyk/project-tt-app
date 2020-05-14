import React, { Fragment, useState, useContext } from 'react';
import TripsContext from '../../context/trip/TripContext';
import UserContext from '../../context/user/UserContext';
import AlertContext from '../../context/alert/AlertContext';
import Alerts from '../auth/Alerts';

const OfferTrip = () => {
  const tripContext = useContext(TripsContext);
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);

  const { user, event } = userContext;
  const { setAlert } = alertContext;

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

  const {
    pickup_zip_code,
    journey_start_time,
    journey_car,
    journey_text,
    journey_empty_spaces,
    journey_date,
  } = trip;

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      pickup_zip_code === '' ||
      journey_start_time === '' ||
      journey_car === '' ||
      journey_text === '' ||
      journey_empty_spaces === '' ||
      journey_date === ''
    ) {
      setAlert('Please fill in all fields', 'danger');
    } else {
      console.log(trip);
      tripContext.addTrip(trip);
      setAlert('Trip was successfully submitted', 'success');
      setTrip({
        pickup_zip_code: '',
        journey_start_time: '',
        journey_car: '',
        journey_text: '',
        journey_empty_spaces: null,
        journey_date: '',
      });
    }
  };

  const onChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]:
        e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    });
  };

  return (
    <Fragment>
      <h1 className='heading'>Erstelle eine Fahrt</h1>
      <form onSubmit={onSubmit} className='trips__form'>
        <div className='fields'>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Abfahrtsort'
              name='pickup_zip_code'
              value={pickup_zip_code}
              onChange={onChange}
            />
          </div>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Abfahrtszeit'
              name='journey_start_time'
              value={journey_start_time}
              onChange={onChange}
            />
          </div>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Abfahrtsdatum'
              name='journey_date'
              value={journey_date}
              onChange={onChange}
            />
          </div>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Car'
              name='journey_car'
              value={journey_car}
              onChange={onChange}
            />
          </div>
          <div className='input__wrapper'>
            <input
              type='number'
              placeholder='Seats'
              name='journey_empty_spaces'
              value={journey_empty_spaces}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='free__text'>
          <textarea
            type='text'
            placeholder='Beschreibung'
            name='journey_text'
            value={journey_text}
            onChange={onChange}
          />
        </div>
        <div className='button__wrapper'>
          <Alerts />
          <button className='button'>Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default OfferTrip;
