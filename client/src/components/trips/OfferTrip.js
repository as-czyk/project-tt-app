import React, { Fragment, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TripsContext from '../../context/trip/TripContext';

const OfferTrip = () => {
  const tripContext = useContext(TripsContext);

  const [trip, setTrip] = useState({
    meeting_point: '',
    time: '',
    car_type: '',
    text: '',
    seats: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    tripContext.addTrip(trip);
    setTrip({
      meeting_point: '',
      time: '',
      car_type: '',
      text: '',
      seats: '',
    });
  };

  const onChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const { meeting_point, time, car_type, text, seats } = trip;

  return (
    <Fragment>
      <h1>Heading for submitting Form</h1>
      <form onSubmit={onSubmit} className='trips__form'>
        <input
          type='text'
          placeholder='Abfahrtsort'
          name='meeting_point'
          value={meeting_point}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Abfahrtszeit'
          name='time'
          value={time}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Beschreibung'
          name='text'
          value={text}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Car'
          name='car_type'
          value={car_type}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Seats'
          name='seats'
          value={seats}
          onChange={onChange}
        />
        <button className='btn btn-sumbit'>Submit</button>
      </form>
    </Fragment>
  );
};

export default OfferTrip;
