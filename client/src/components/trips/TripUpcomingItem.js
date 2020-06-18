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
      <img
        src={`/static/images/${event.club_id_home}.png`}
        alt='Home Team'
        className='upcoming__logo__wrapper'
      />
      <p style={{ fontSize: '30px' }}>:</p>
      <img
        src={`/static/images/${event.club_id_away}.png`}
        alt='Away Team'
        className='upcoming__logo__wrapper'
      />
    </div>
  );
};

export default TripUpcomingItem;
