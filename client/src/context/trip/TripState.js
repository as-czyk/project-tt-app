import React, { useReducer } from 'react';
import TripContext from './TripContext';
import TripReducer from './TripReducer';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TRIP, FILTER_TRIPS, CLEAR_FILTER } from '../types';

const TripState = (props) => {
  const initialState = {
    trips: [
      {
        id: 1,
        seats: '3',
        user_id: '290',
        status: 'true',
        text: 'Hallo das ist eine Fahrt die ich anbieten möchte',
        time: '16:00',
        car_type: 'Auto',
        meeting_point: 'Mannheim',
      },
      {
        id: 2,
        seats: '1',
        user_id: '291',
        status: 'true',
        text: 'Hallo das ist eine Fahrt die ich anbieten möchte',
        time: '16:00',
        car_type: 'Auto',
        meeting_point: 'Hanau',
      },
      {
        id: 3,
        seats: '4',
        user_id: '292',
        status: 'true',
        text: 'Hallo das ist eine Fahrt die ich anbieten möchte',
        time: '16:00',
        car_type: 'Auto',
        meeting_point: 'Frankfurt',
      },
    ],
    filtered: null,
  };

  const [state, dispatch] = useReducer(TripReducer, initialState);

  /**
   * Api Calls go here, functionallity goes here
   */

  //Add Trip
  const addTrip = (trip) => {
    // Dev Data
    trip.id = uuidv4();
    trip.user_id = uuidv4();
    trip.status = 'true';
    dispatch({
      type: ADD_TRIP,
      payload: trip,
    });
  };

  // Filter Trips
  const filterTrips = (text) => {
    dispatch({
      type: FILTER_TRIPS,
      payload: text,
    });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <TripContext.Provider
      value={{
        trips: state.trips,
        filtered: state.filtered,
        addTrip,
        filterTrips,
        clearFilter,
      }}
    >
      {props.children}
    </TripContext.Provider>
  );
};

export default TripState;
