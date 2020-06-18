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
          const filter = action.payload;
          if (
            trip.pickup_zip_code !== filter.city &&
            filter.city !== undefined &&
            filter.city !== ''
          ) {
            return false;
          }

          if (
            trip.journey_empty_spaces < filter.seats &&
            filter.seats !== 'undefined'
          ) {
            return false;
          }

          if (
            trip.journey_money > filter.maxcost &&
            filter.maxcost !== 'undefined'
          ) {
            return false;
          }

          if (
            trip.journey_date !== filter.date &&
            filter.date !== undefined &&
            filter.date !== 'undefined'
          ) {
            return false;
          }

          if (
            trip.journey_start_time !== filter.time &&
            filter.time !== undefined &&
            filter.date !== 'undefined'
          ) {
            return false;
          }

          return true;
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
