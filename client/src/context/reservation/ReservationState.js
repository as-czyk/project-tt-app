import React, { useReducer } from 'react';
import ReservationContext from './ReservationContext';
import ReservationReducer from './ReservationReducer';
import axios from 'axios';
import { MAKE_RESERVATION, SET_LOADING, GET_RESERVATION } from '../types';

const ReservationState = (props) => {
  const initialState = {
    makeReservation: [],
    reciviedReservation: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ReservationReducer, initialState);

  /**
   * Api Calls go here
   */

  //Add a reservation
  const addReservation = async (reservation) => {
    setLoading();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/reservation', reservation, config);

      dispatch({
        type: MAKE_RESERVATION,
        payload: reservation,
      });
    } catch (err) {
      console.log('error');
    }
  };

  //Get reservation
  const getReservation = async (userId) => {
    setLoading();

    try {
      const res = await axios.get('/api/reservation', {
        params: {
          id: userId,
        },
      });
      dispatch({
        type: GET_RESERVATION,
        payload: res.data,
      });
    } catch (err) {
      console.log('error');
    }
  };

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ReservationContext.Provider
      value={{
        makeReservation: state.makeReservation,
        reciviedReservation: state.reciviedReservation,
        addReservation,
        getReservation,
      }}
    >
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationState;
