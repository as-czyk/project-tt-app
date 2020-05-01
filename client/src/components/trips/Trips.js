import React, { Fragment, useContext } from 'react';
import TripsContext from '../../context/trip/TripContext';
import TripItem from './TripItem';
import TripsSearch from './TripsSearch';

const Trips = () => {
  const tripscontext = useContext(TripsContext);
  return (
    <Fragment>
      <TripsSearch />
      <div className='trips__wrapper'>
        {tripscontext.trips.map((trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </Fragment>
  );
};

export default Trips;
