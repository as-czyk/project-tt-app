import {
  ADD_TRIP,
  FILTER_TRIPS,
  CLEAR_FILTER,
  LOAD_TRIPS,
  SET_LOADING,
  USER_TRIPS,
  DELETE_TRIP,
  UPDATE_TRIP,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TRIP:
      return {
        ...state,
        trips: [...state.trips, action.payload],
      };

    case FILTER_TRIPS:
      return {
        ...state,
        filtered: state.trips.filter((trip) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return trip.journey_text.match(regex);
        }),
      };

    case DELETE_TRIP:
      return {
        ...state,
        userTrips: state.userTrips.filter(
          (userTrip) => userTrip.journey_id !== action.payload
        ),
      };

    case LOAD_TRIPS:
      return {
        ...state,
        trips: action.payload,
        loading: false,
      };

    case USER_TRIPS:
      return {
        ...state,
        userTrips: action.payload,
        loading: false,
      };

    case UPDATE_TRIP:
      return {
        ...state,
        userTrips: state.userTrips.filter(
          (userTrip) => userTrip.journey_id !== action.payload.journey_id
        ),
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return {
        state,
      };
  }
};
