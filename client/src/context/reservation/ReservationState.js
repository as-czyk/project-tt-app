import React, { useReducer } from 'react';
import ReservationContext from './ReservationContext';
import ReservationReducer from './ReservationReducer';
import axios from 'axios';
import {
  MAKE_RESERVATION,
  SET_LOADING,
  GET_RESERVATION,
  DECLINE_RESERVATION,
  ACCEPT_RESERVATION,
} from '../types';

const ReservationState = (props) => {
  const initialState = {
    makeReservation: [],
    reciviedReservation: [],
    acceptedReservation: [],
    declinedReservation: [],
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
      await axios.post('/api/reservation', reservation, config);

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
      const res = await axios.get('/api/reservation/messages', {
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

  //Accept reservation
  const acceptReservation = async (reservationID) => {
    setLoading();
    console.log(reservationID);

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.patch(
        '/api/reservation/status',
        {
          reservation_id: reservationID.id,
          reservation_seats: reservationID.seats,
          reservation_status: reservationID.status,
        },
        config
      );

      dispatch({
        type: ACCEPT_RESERVATION,
        payload: reservationID,
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  // Decline Reservation
  const declineReservation = async (reservationID) => {
    setLoading();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.patch(
        '/api/reservation/status',
        {
          reservation_id: reservationID.id,
          reservation_seats: reservationID.seats,
          reservation_status: reservationID.status,
        },
        config
      );
      dispatch({
        type: DECLINE_RESERVATION,
        payload: reservationID,
      });
    } catch (err) {
      console.log('error', err);
    }
  };

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ReservationContext.Provider
      value={{
        makeReservation: state.makeReservation,
        reciviedReservation: state.reciviedReservation,
        loading: state.loading,
        acceptedReservation: state.acceptedReservation,
        declinedReservation: state.declinedReservation,
        addReservation,
        getReservation,
        acceptReservation,
        declineReservation,
      }}
    >
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationState;
