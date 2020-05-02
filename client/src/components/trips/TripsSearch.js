import React, { Fragment, useContext, useRef, useEffect } from 'react';
import TripContext from '../../context/trip/TripContext';

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
    if (text.current.value != '') {
      filterTrips(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form class='search__trips'>
      <input
        className='search__bar'
        type='text'
        placeholder='Filter Trips...'
        ref={text}
        onChange={onChange}
      />
    </form>
  );
};

export default TripsSearch;
