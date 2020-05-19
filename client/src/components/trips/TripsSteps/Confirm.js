import React, { Fragment, useContext } from 'react';
import TripContext from '../../../context/trip/TripContext';

const Confirm = (props) => {
  const tripContext = useContext(TripContext);
  const { trip, previousStep, step, nextStep, setTrip } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    tripContext.addTrip(trip);
    setTrip({
      pickup_zip_code: '',
      journey_start_time: '',
      journey_car: '',
      journey_text: '',
      journey_empty_spaces: null,
      journey_date: '',
      journey_money: null,
    });
    nextStep();
  };

  return (
    <div className='confirm__ctn__wrapper'>
      <div className='form__steps__confirm'>
        <h2>Step {step} of 4</h2>
      </div>
      <div className='form__steps__confirm'>
        <h3>Please check your and confirm your input:</h3>
      </div>
      <form onSubmit={onSubmit} className='confirm__wrapper'>
        <p>Abfahrtsort: {trip.pickup_zip_code}</p>
        <p>Abfahrtszeit: {trip.journey_start_time}</p>
        <p>Datum: {trip.journey_date}</p>
        <p>Auto: {trip.journey_car}</p>
        <p>Verfügbare Plätze: {trip.journey_empty_spaces}</p>
        <p>Kosten: {trip.journey_money}</p>
        <div className='button__wrapper__confirm'>
          <button className='button'>Submit</button>
          <i class='fas fa-arrow-circle-left fa-2x' onClick={previousStep}></i>
        </div>
      </form>
    </div>
  );
};

export default Confirm;
