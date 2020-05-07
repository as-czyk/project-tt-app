import React, { useReducer } from 'react';
import UserContext from './UserContext';
import UseReducer from './UserReducer';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  LOAD_ERROR,
  EVENT_LOADED,
  SET_LOADING,
} from '../types';

const UserState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null,
    event: null,
  };

  const [state, dispatch] = useReducer(UseReducer, initialState);

  /**
   * Api Calls / Functionality
   */

  //Load Event
  const loadEvent = async (eventId) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/event', {
        params: {
          event_id: eventId,
        },
      });
      dispatch({
        type: EVENT_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOAD_ERROR,
      });
    }
  };

  //Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  //Login User
  const login = async (loginData) => {
    setLoading();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/auth', loginData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (error) {
      dispatch({ type: LOGIN_FAIL });
    }
  };

  //Logout
  const logout = () => dispatch({ type: LOGOUT });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        event: state.event,
        login,
        loadUser,
        logout,
        loadEvent,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
