import React, { useContext } from 'react';
import AlertContext from '../../../context/alert/AlertContext';
import Alert from '../../auth/Alerts';

import '../trips.scss';

const TripsInfo = (props) => {
  const { nextStep, previousStep, trip, onChange, step } = props;
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const validate = () => {
    if (
      trip.journey_car === '' ||
      trip.journey_empty_spaces === '' ||
      trip.journey_money === ''
    ) {
      setAlert('Please enter all required field', 'danger');
    } else {
      nextStep();
    }
  };

  return (
    <div className='trips__form'>
      <div className='form__ctn'>
        <div className='form__steps'>
          <p>{step}</p>
        </div>
        <div className='form__text'>
          <p>
            How many seats you you have available and how much is each seat?
          </p>
        </div>
        <div className='input__wrapper'>
          <input
            type='text'
            placeholder='Car'
            name='journey_car'
            value={trip.journey_car}
            onChange={onChange}
          />
        </div>
        <div className='input__wrapper'>
          <input
            type='number'
            placeholder='Seats'
            name='journey_empty_spaces'
            value={trip.journey_empty_spaces}
            onChange={onChange}
          />
        </div>
        <div className='input__wrapper'>
          <input
            type='number'
            placeholder='Mitfahrerkosten'
            name='journey_money'
            value={trip.journey_money}
            onChange={onChange}
          />
        </div>
        <Alert />
        <div className='button__wrapper'>
          <i class='fas fa-arrow-circle-left fa-2x' onClick={previousStep}></i>
          <i class='fas fa-arrow-circle-right fa-2x' onClick={validate}></i>
        </div>
      </div>
      <div className='form__img'>
        <p>Picture</p>
      </div>
    </div>
  );
};

export default TripsInfo;
