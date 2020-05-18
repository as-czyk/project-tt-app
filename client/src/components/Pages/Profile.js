import React, { Fragment } from 'react';
import UserData from '../profile/UserData';
import UserTrips from '../profile/UserTrips';
import UserReservation from '../profile/UserReservation.js';

const Profile = () => {
  return (
    <Fragment>
      <UserData />
      <UserTrips />
      <UserReservation />
    </Fragment>
  );
};

export default Profile;
