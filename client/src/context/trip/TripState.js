import React, { useReducer } from 'react';
import TripContext from './TripContext';
import TripReducer from './TripReducer';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TRIP,
  FILTER_TRIPS,
  CLEAR_FILTER,
  LOAD_TRIPS,
  LOAD_ERROR,
} from '../types';
import axios from 'axios';

const TripState = (props) => {
  const initialState = {
    trips: [],
    filtered: null,
  };

  const [state, dispatch] = useReducer(TripReducer, initialState);

  /**
   * Api Calls go here, functionallity goes here
   */

  //Add Trip
  const addTrip = (trip) => {
    //Fix hardcoded data
    trip.journey_id = uuidv4();
    trip.event_id = 'eff7e9ae-9c58-42e1-8835-0d51c33dc480';
    trip.event_start_date = 'Test';
    trip.event_start_time = 'Test';
    trip.event_address = 'Test';
    trip.journey_date = 'Test';

    // Dev Data
    // Api call to backend goes here

    /*try {
      const res = await axios.post('/api/journey', {

      })
    } catch (err) {

    } */

    dispatch({
      type: ADD_TRIP,
      payload: trip,
    });
  };

  //Load Trips
  const loadTrips = async (eventID) => {
    try {
      const res = await axios.get('/api/trip_event', {
        params: {
          id: eventID,
        },
      });
      dispatch({
        type: LOAD_TRIPS,
        payload: res.data.trip_event,
      });
    } catch (err) {
      dispatch({
        type: LOAD_ERROR,
      });
    }
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
        loadTrips,
      }}
    >
      {props.children}
    </TripContext.Provider>
  );
};

export default TripState;
