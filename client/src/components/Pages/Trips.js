import React, { Fragment, useContext, useEffect } from 'react';
import TripsContext from '../../context/trip/TripContext';
import UserContext from '../../context/user/UserContext';
import TripItem from '../trips/TripItem';
import TripsSearch from '../trips/TripsSearch';

const Trips = () => {
  const tripscontext = useContext(TripsContext);
  const userContext = useContext(UserContext);

  const { user } = userContext;
  const { trips, filtered, loadTrips, loading } = tripscontext;

  useEffect(() => {
    loadTrips(user.user.event_id);
  }, []);

  console.log(loading);

  if (!loading) {
    return (
      <Fragment>
        <TripsSearch />
        <div className='trips__wrapper'>
          <h2>Zur Zeit werden {trips.length} Mitfahrglegenheiten angeboten</h2>
          {filtered !== null
            ? filtered.map((trip) => (
                <TripItem key={trip.journey_id} trip={trip} />
              ))
            : trips.map((trip) => (
                <TripItem key={trip.journey_id} trip={trip} />
              ))}
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <TripsSearch />
        <div className='trips__wrapper'>
          <h1>Loading</h1>;
        </div>
      </Fragment>
    );
  }
};

export default Trips;
