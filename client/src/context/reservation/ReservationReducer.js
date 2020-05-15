import { MAKE_RESERVATION, SET_LOADING, GET_RESERVATION } from '../types';

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
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
