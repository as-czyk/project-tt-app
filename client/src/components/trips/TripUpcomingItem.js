import React, { useState, useContext } from 'react';
import TripContext from '../../context/trip/TripContext';

const TripUpcomingItem = (props) => {
  const tripContext = useContext(TripContext);
  const { event } = props;
  const { loadTrips } = tripContext;

  const state = useState({
    id: event.event_id,
  });

  const onClick = (state) => {
    loadTrips(state[0].id);
  };

  return (
    <div
      onClick={() => {
        onClick(state);
      }}
      className='tripsUpcoming__item__container'
    >
      <p>{event.club_id_home}</p>
      <p>Vs</p>
      <p>{event.club_id_away}</p>
    </div>
  );
};

export default TripUpcomingItem;
