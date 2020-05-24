import React, { useContext } from 'react';
import UserContext from '../../context/user/UserContext';

import './profile.scss';

export const UserData = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <div className='userdata__container'>
      <h1 style={{ paddingLeft: '20px' }}>Personal Details</h1>
      <div className='userdata__container__content'>
        <div className='userdata__container__picture'>
          <i class='far fa-user fa-5x'></i>
          <p>User Bewertung</p>
        </div>
        <div className='userdata__container__info'>
          <p>E-Mail Adress: {user.user.user_email}</p>
          <p>Username: {user.user.username}</p>
          <div className='userdata__container__button'>
            <button className='button__sge__2'>Update Profil</button>
            <button className='button__sge__1'>Delete Profil</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
