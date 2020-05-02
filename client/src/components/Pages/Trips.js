import React, { Fragment, useContext } from 'react';
import TripsContext from '../../context/trip/TripContext';
import TripItem from '../trips/TripItem';
import TripsSearch from '../trips/TripsSearch';

const Trips = () => {
  const tripscontext = useContext(TripsContext);
  const { trips, filtered } = tripscontext;

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
