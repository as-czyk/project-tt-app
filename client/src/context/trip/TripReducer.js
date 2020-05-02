import { ADD_TRIP } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TRIP:
      return {
        ...state,
        trips: [...state.trips, action.payload],
      };

    default:
      return {
        state,
      };
  }
};
