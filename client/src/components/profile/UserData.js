import React, { useContext } from 'react';
import UserContext from '../../context/user/UserContext';

import './profile.scss';

export const UserData = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <div className='userdata__container'>
      <p>{user.user.event_id}</p>
      <p>{user.user.user_email}</p>
      <p>{user.user.username}</p>
    </div>
  );
};

export default UserData;
