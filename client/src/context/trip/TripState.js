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
  SET_LOADING,
} from '../types';
import axios from 'axios';

const TripState = (props) => {
  const initialState = {
    trips: [],
    filtered: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(TripReducer, initialState);

  /**
   * Api Calls go here, functionallity goes here
   */

  //Add Trip
  const addTrip = async (trip) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/trip', trip, config);
      dispatch({
        type: ADD_TRIP,
        payload: trip,
      });
    } catch (err) {
      dispatch({
        type: LOAD_ERROR,
      });
    }
  };

  //Load Trips
  const loadTrips = async (eventID) => {
    setLoading();
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

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TripContext.Provider
      value={{
        trips: state.trips,
        filtered: state.filtered,
        loading: state.loading,
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
