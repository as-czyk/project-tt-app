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
    <Fragment>
      <div className='form__steps'>
        <p>Step {step} of 4</p>
      </div>
      <form onSubmit={onSubmit} className='confirm__wrapper'>
        <p>Abfahrtsort: {trip.pickup_zip_code}</p>
        <p>Abfahrtszeit: {trip.journey_start_time}</p>
        <p>Datum: {trip.journey_date}</p>
        <p>Auto: {trip.journey_car}</p>
        <p>Verfügbare Plätze: {trip.seats}</p>
        <p>Kosten: {trip.journey_money}</p>
        <div className='button__wrapper'>
          <i class='fas fa-arrow-circle-left fa-2x' onClick={previousStep}></i>
          <button className='button'>Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Confirm;
