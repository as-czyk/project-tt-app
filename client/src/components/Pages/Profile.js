import React from 'react';
import UserData from '../profile/UserData';
import UserTrips from '../profile/UserTrips';
import UserReservation from '../profile/UserReservation.js';

import './profile.scss';

const Profile = () => {
  return (
    <div className='profile__wrapper'>
      <UserData />
      <UserTrips />
      <UserReservation />
    </div>
  );
};

export default Profile;
