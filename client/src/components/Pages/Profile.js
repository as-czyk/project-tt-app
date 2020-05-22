import React from 'react';
import UserData from '../profile/UserData';
import UserTrips from '../profile/UserTrips';
import UserReservation from '../profile/UserReservation';
import UserRequest from '../profile/UserRequest';

import './profile.scss';

const Profile = () => {
  return (
    <div className='profile__wrapper'>
      <UserData />
      <UserTrips />
      <UserReservation />
      <UserRequest />
    </div>
  );
};

export default Profile;
