import React, { useState, useContext } from 'react';
import TripContext from '../../context/trip/TripContext';

const TripUpcomingItem = (props) => {
  const tripContext = useContext(TripContext);
  const { event } = props;
  const { loadTrips } = tripContext;

  const [state, setState] = useState({
    id: event.event_id,
    active: false,
  });

  const onClick = (state) => {
    loadTrips(state.id);
  };

  return (
    <div
      onClick={() => {
        onClick(state);
        setState({
          ...state,
          active: true,
        });
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
