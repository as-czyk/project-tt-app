import React, { useContext, useRef, useEffect } from 'react';
import TripContext from '../../context/trip/TripContext';

import './trips.scss';

const TripsSearch = () => {
  const tripContext = useContext(TripContext);
  const text = useRef('');

  const { filtered, clearFilter, filterTrips } = tripContext;

  useEffect(() => {
    if (filtered == null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterTrips(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className='search__trips'>
      <input
        className='search__bar'
        type='text'
        placeholder='Filter your City...'
        ref={text}
        onChange={onChange}
      />
      <div className='filter__selector'>
        <select name='seats' selected='Available Seats'>
          <option value='' seclected disabled hidden>
            Available Seats
          </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <select name='price' selected='Cost per fellow'>
          <option value='' seclected disabled hidden>
            Cost per fellow
          </option>
          <option value='1'>5-10€</option>
          <option value='2'>10-15€</option>
          <option value='3'>15-20€</option>
        </select>
        <select name='date' selected='Depature Date'>
          <option value='' seclected disabled hidden>
            Depature Date
          </option>
          <option value='1'>XX.YY.ZZZZ</option>
          <option value='2'>XX.YY.ZZZZ</option>
          <option value='3'>XX.YY.ZZZZ</option>
        </select>
        <select name='date' selected='Depature Time'>
          <option value='' seclected disabled hidden>
            Depature Time
          </option>
          <option value='1'>XX:YY</option>
          <option value='2'>XX:YY</option>
          <option value='3'>XX:YY</option>
        </select>
      </div>
    </form>
  );
};

export default TripsSearch;
