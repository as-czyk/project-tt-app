import React, { Fragment, useContext, useEffect } from 'react';
import UserTripsItem from '../profile/UserTripsItem';
import TripContext from '../../context/trip/TripContext';
import UserContext from '../../context/user/UserContext';

const UserTrips = () => {
  const tripContext = useContext(TripContext);
  const userContext = useContext(UserContext);

  const { getTripsForUser, userTrips, loading } = tripContext;

  useEffect(() => {
    getTripsForUser(userContext.user.user.user_id);
  }, []);

  if (!loading && userTrips != undefined) {
    return (
      <Fragment>
        <div className='userdata__container'>
          <h2>Your active trips</h2>
          {userTrips.map((userTrip) => (
            <UserTripsItem key={userTrip.journey_id} userTrip={userTrip} />
          ))}
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className='userdata__container'>
          <h1>Loading</h1>
        </div>
      </Fragment>
    );
  }
};

export default UserTrips;
