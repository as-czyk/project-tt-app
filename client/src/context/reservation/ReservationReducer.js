import {
  MAKE_RESERVATION,
  SET_LOADING,
  GET_RESERVATION,
  ACCEPT_RESERVATION,
  DECLINE_RESERVATION,
  ERROR,
  GET_REQUESTS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case MAKE_RESERVATION:
      return {
        ...state,
        makeReservation: action.payload,
        loading: false,
      };
    case GET_RESERVATION:
      return {
        ...state,
        reciviedReservation: action.payload,
        loading: false,
      };
    case ACCEPT_RESERVATION:
      return {
        ...state,
        acceptedReservation: action.payload,
        reciviedReservation: state.reciviedReservation.filter(
          (reservation) => reservation.reservation_id !== action.payload.id
        ),
        loading: false,
      };

    case DECLINE_RESERVATION:
      return {
        ...state,
        declinedReservation: action.payload,
        reciviedReservation: state.reciviedReservation.filter(
          (reservation) => reservation.reservation_id !== action.payload.id
        ),
        loading: false,
      };

    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
