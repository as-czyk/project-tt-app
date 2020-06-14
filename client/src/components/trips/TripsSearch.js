import React, { useContext, useRef, useEffect, useState } from 'react';
import TripContext from '../../context/trip/TripContext';
import UserContext from '../../context/user/UserContext';

import './trips.scss';

const TripsSearch = () => {
  const tripContext = useContext(TripContext);
  const userContext = useContext(UserContext);

  //const text = useRef('');

  const { filtered, clearFilter, filterTrips } = tripContext;
  const { event } = userContext;

  const [filter, setFilter] = useState({
    city: undefined,
    seats: undefined,
    maxcost: undefined,
    date: undefined,
    time: undefined,
  });

  useEffect(() => {
    filterTrips(filter);
  }, [filter]);

  const removeFilter = () => {
    setFilter({
      ...filter,
      city: undefined,
      seats: undefined,
      maxcost: undefined,
      date: undefined,
      time: undefined,
    });
    clearFilter();
  };

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <form className='search__trips'>
      <input
        className='search__bar'
        type='text'
        placeholder='Filter your City...'
        name='city'
        value={filter.city}
        onChange={onChange}
      />
      <div className='filter__selector'>
        <select
          name='seats'
          selected='Available Seats'
          value={filter.seats}
          onChange={onChange}
        >
          <option value='undefined' seclected='selected'>
            Available Seats
          </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <select
          name='maxcost'
          selected='Cost per fellow'
          value={filter.money}
          onChange={onChange}
        >
          <option value='undefined' seclected='selected'>
            Max Cost
          </option>
          <option value='5'>5€</option>
          <option value='10'>10€</option>
          <option value='15'>15€</option>
          <option value='20'>20€</option>
        </select>
        <select
          name='date'
          selected='Depature Date'
          value={filter.date}
          onChange={onChange}
        >
          <option value='undefined' selected='selected'>
            Depature Date
          </option>
          <option value={event[0].event_start_date}>
            {event[0].event_start_date}
          </option>
          <option value='2'>XX.YY.ZZZZ</option>
          <option value='3'>XX.YY.ZZZZ</option>
        </select>
        <select
          name='time'
          selected='Depature Time'
          value={filter.time}
          onChange={onChange}
        >
          <option value='undefined' seclected='selected'>
            Depature Time
          </option>
          <option value='12:00'>12:00</option>
          <option value='13:00'>13:00</option>
          <option value='14:00'>14:00</option>
        </select>
      </div>
      <div className='filter__button__wrapper'>
        <button onClick={removeFilter} className='button__sge__2'>
          Clear Filters
        </button>
      </div>
    </form>
  );
};

export default TripsSearch;
