import React, { useReducer } from 'react';
import UserContext from './UserContext';
import UseReducer from './UserReducer';
import {} from './types';

const UserState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(UseReducer, initialState);

  /**
   * Api Calls / Functionality
   */

  return (
    <UserContext.Provider value={{}}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
