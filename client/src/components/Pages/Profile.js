import React, { Fragment } from 'react';
import UserData from '../profile/UserData';
import UserTrips from '../profile/UserTrips';

const Profile = () => {
  return (
    <Fragment>
      <UserData />
      <UserTrips />
    </Fragment>
  );
};

export default Profile;
