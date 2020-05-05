import { ADD_TRIP, FILTER_TRIPS, CLEAR_FILTER, LOAD_TRIPS } from '../types';

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
          return trip.meeting_point.match(regex);
        }),
      };

    case LOAD_TRIPS:
      return {
        ...state,
        trips: [...state.trips, action.payload],
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return {
        state,
      };
  }
};
