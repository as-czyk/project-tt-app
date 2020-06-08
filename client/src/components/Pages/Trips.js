import React, { Fragment, useContext, useEffect } from 'react';
import TripsContext from '../../context/trip/TripContext';
import UserContext from '../../context/user/UserContext';
import TripItem from '../trips/TripItem';
import TripsSearch from '../trips/TripsSearch';
import TripUpcoming from '../trips/TripUpcoming';

const Trips = () => {
  const tripscontext = useContext(TripsContext);
  const userContext = useContext(UserContext);

  const { event } = userContext;
  const { trips, filtered, loadTrips, loading } = tripscontext;

  useEffect(() => {
    loadTrips(event[0].event_id);
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    return (
      <Fragment>
        <TripUpcoming />
        <TripsSearch />
        <div className='trips__wrapper'>
          <h2>There are currently {trips.length} carpooling opportunities</h2>
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
          <h1>Loading</h1>
        </div>
      </Fragment>
    );
  }
};

export default Trips;
