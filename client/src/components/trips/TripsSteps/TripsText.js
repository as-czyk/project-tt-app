import React from 'react';

import '../trips.scss';

const TripsText = (props) => {
  const { nextStep, previousStep, onChange, trip, step } = props;

  return (
    <div className='trips__form'>
      <div className='form__ctn'>
        <div className='form__steps'>
          <p>{step}</p>
        </div>
        <div className='form__text'>
          <p>Anything else that you want your fellows to know?</p>
        </div>
        <textarea
          type='text'
          placeholder='Beschreibung'
          name='journey_text'
          value={trip.journey_text}
          onChange={onChange}
        />
        <div className='button__wrapper'>
          <i class='fas fa-arrow-circle-left fa-2x' onClick={previousStep}></i>
          <i class='fas fa-arrow-circle-right fa-2x' onClick={nextStep}></i>
        </div>
      </div>
      <div className='form__img'>
        <p>Bild</p>
      </div>
    </div>
  );
};

export default TripsText;
