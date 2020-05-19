import React, { Fragment, useContext } from 'react';
import AlertContext from '../../../context/alert/AlertContext';
import Alert from '../../auth/Alerts';
import picture from '../../../resources/eintracht-images/choreo1.jpg';

import '../trips.scss';

const TripsDetails = (props) => {
  const { trip, onChange, nextStep, step } = props;
  const alertState = useContext(AlertContext);

  const { setAlert } = alertState;

  const validate = () => {
    if (
      trip.pickup_zip_code === '' ||
      trip.journey_start_time === '' ||
      trip.journey_date === ''
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
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Abfahrtsort'
              name='pickup_zip_code'
              value={trip.pickup_zip_code}
              onChange={onChange}
            />
          </div>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Abfahrtszeit'
              name='journey_start_time'
              value={trip.journey_start_time}
              onChange={onChange}
            />
          </div>
          <div className='input__wrapper'>
            <input
              type='text'
              placeholder='Abfahrtsdatum'
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
