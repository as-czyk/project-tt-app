import React, { useReducer } from 'react';
import TripContext from './TripContext';
import TripReducer from './TripReducer';
import {
  ADD_TRIP,
  FILTER_TRIPS,
  CLEAR_FILTER,
  LOAD_TRIPS,
  LOAD_ERROR,
  SET_LOADING,
  USER_TRIPS,
  DELETE_TRIP,
  UPDATE_TRIP,
} from '../types';
import axios from 'axios';

const TripState = (props) => {
  const initialState = {
    trips: [],
    userTrips: [],
    filtered: null,
    loading: false,
    errors: null,
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
      await axios.post('/api/trip', trip, config);
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

  //Get Trips
  const getTripsForUser = async (userID) => {
    try {
      const res = await axios.get('/api/tripUser', {
        params: {
          id: userID,
        },
      });
      dispatch({
        type: USER_TRIPS,
        payload: res.data.tripUser,
      });
    } catch (err) {
      dispatch({
        type: LOAD_ERROR,
      });
    }
  };

  //Delete Trip
  const deleteTrip = async (tripID) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.delete(
        '/api/trip',
        {
          data: {
            journey_id: tripID,
          },
        },
        config
      );
      dispatch({
        type: DELETE_TRIP,
        payload: tripID,
      });
    } catch (err) {
      dispatch({
        type: LOAD_ERROR,
      });
    }
  };

  //Change Trip
  const updateTrip = async (formData) => {
    setLoading();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.patch(
        '/api/trip',
        {
          journey_id: formData.journey_id,
          journey_empty_spaces: formData.journey_empty_spaces,
          journey_car: formData.journey_car,
          journey_date: formData.journey_date,
          journey_text: formData.journey_text,
          pickup_zip_code: formData.pickup_zip_code,
        },
        config
      );

      dispatch({
        type: UPDATE_TRIP,
        payload: formData,
      });
    } catch (err) {}
  };

  // Filter Trips
  const filterTrips = (filter) => {
    dispatch({
      type: FILTER_TRIPS,
      payload: filter,
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
        userTrips: state.userTrips,
        errors: state.errors,
        addTrip,
        filterTrips,
        clearFilter,
        loadTrips,
        getTripsForUser,
        deleteTrip,
        updateTrip,
      }}
    >
      {props.children}
    </TripContext.Provider>
  );
};

export default TripState;
