import React, { Fragment, useContext, useEffect } from 'react';
import UserTripsItem from './Items/UserTripsItem';
import TripContext from '../../context/trip/TripContext';
import UserContext from '../../context/user/UserContext';

const UserTrips = () => {
  const tripContext = useContext(TripContext);
  const userContext = useContext(UserContext);

  const { getTripsForUser, userTrips, loading } = tripContext;

  useEffect(() => {
    getTripsForUser(userContext.user.user.user_id);
    // eslint-disable-next-line
  }, []);

  if (!loading && userTrips !== undefined) {
    return (
      <Fragment>
        <div className='userdata__container'>
          <h1 style={{ paddingLeft: '20px' }}>Your active trips</h1>
          {userTrips.map((userTrip) => (
            <UserTripsItem key={userTrip.journey_id} userTrip={userTrip} />
          ))}
        </div>
      </Fragment>
    );
  } else if (userTrips.length === 0) {
    return (
      <div className='userdata__container'>
        <h1 style={{ paddingLeft: '20px' }}>Your active trips</h1>
        <div className='empty__container__text'>
          <p>You do not have any active trips!</p>
        </div>
      </div>
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
