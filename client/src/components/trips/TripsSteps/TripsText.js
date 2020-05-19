import React from 'react';
import picture from '../../../resources/eintracht-images/choreo3.jpg';

import '../trips.scss';

const TripsText = (props) => {
  const { nextStep, previousStep, onChange, trip, step } = props;

  return (
    <div className='trips__form'>
      <div className='form__ctn'>
        <div className='form__steps'>
          <h2>Step {step} of 4</h2>
        </div>
        <div className='form__text'>
          <h3>Anything else that you want your fellows to know?</h3>
        </div>
        <textarea
          type='text'
          placeholder='Beschreibung'
          name='journey_text'
          value={trip.journey_text}
          onChange={onChange}
        />
        <div className='button__wrapper'>
          <i
            className='fas fa-arrow-circle-left fa-2x'
            onClick={previousStep}
          ></i>
          <i className='fas fa-arrow-circle-right fa-2x' onClick={nextStep}></i>
        </div>
      </div>
      <div className='form__img'>
        <img src={picture} alt='Eintracht Frankfurt' />
      </div>
    </div>
  );
};

export default TripsText;
