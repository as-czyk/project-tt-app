import React, { Fragment, useContext } from 'react';
import AlertContext from '../../../context/alert/AlertContext';
import UserContext from '../../../context/user/UserContext';
import Alert from '../../auth/Alerts';
import EventOption from './EventOption';
import picture from '../../../resources/eintracht-images/choreo1.jpg';

import '../trips.scss';

const TripsDetails = (props) => {
  const { trip, onChange, nextStep, step, event_id } = props;
  const alertState = useContext(AlertContext);
  const userContext = useContext(UserContext);

  const { setAlert } = alertState;
  const { event } = userContext;

  const validate = () => {
    if (
      trip.pickup_zip_code === '' ||
      trip.journey_start_time === '' ||
      trip.journey_date === '' ||
      trip.event_id === ''
    ) {
      setAlert('Please enter all required field', 'danger');
    } else {
      nextStep();
    }
  };

  return (
    <Fragment>
      <div className='trips__form'>
        <div className='form__ctn'>
          <div className='form__steps'>
            <h2>Step {step} of 4</h2>
          </div>
          <div className='form__text'>
            <h3>When and where do you want to start?</h3>
          </div>
          <select name='event_id' value={trip.event_id} onChange={onChange}>
            <option value='' seclected='selected'>
              Please select an event
            </option>
            {event.map((event_id) => (
              <EventOption key={event.event_id} event_id={event_id} />
            ))}
          </select>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Place of departure'
              name='pickup_zip_code'
              value={trip.pickup_zip_code}
              onChange={onChange}
            />
          </div>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Departure time'
              name='journey_start_time'
              value={trip.journey_start_time}
              onChange={onChange}
            />
          </div>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Departure date'
              name='journey_date'
              value={trip.journey_date}
              onChange={onChange}
            />
          </div>
          <Alert />
          <i className='fas fa-arrow-circle-right fa-2x' onClick={validate}></i>
        </div>
        <div className='form__img'>
          <img src={picture} alt='Eintracht Frankfurt' />
        </div>
      </div>
    </Fragment>
  );
};

export default TripsDetails;
