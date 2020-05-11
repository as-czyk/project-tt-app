import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGOUT,
  LOAD_ERROR,
  EVENT_LOADED,
  SET_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

    case EVENT_LOADED:
      return {
        ...state,
        event: action.payload.event,
        loading: false,
      };

    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
    case LOAD_ERROR:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false,
        user: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case SET_LOADING:
      return {
        loading: true,
      };

    default:
      return state;
  }
};
