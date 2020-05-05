import React, { Fragment, useContext, useEffect } from 'react';
import TripsContext from '../../context/trip/TripContext';
import UserContext from '../../context/user/UserContext';
import TripItem from '../trips/TripItem';
import TripsSearch from '../trips/TripsSearch';

const Trips = () => {
  const tripscontext = useContext(TripsContext);
  const userContext = useContext(UserContext);

  const { user } = userContext;
  const { trips, filtered, loadTrips } = tripscontext;

  useEffect(() => {
    loadTrips(user.event_id);
  }, []);

  return (
    <Fragment>
      <TripsSearch />
      <div className='trips__wrapper'>
        {filtered !== null
          ? filtered.map((trip) => <TripItem key={trip.id} trip={trip} />)
          : trips.map((trip) => <TripItem key={trip.id} trip={trip} />)}
      </div>
    </Fragment>
  );
};

export default Trips;
