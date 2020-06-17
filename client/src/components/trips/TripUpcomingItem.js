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
      <img src={`../../resources/${event.club_id_home}.png`} alt='Home Team' />
      <p>Vs</p>
      <img
        src={`../../resources/${event.club_id_away}.png`}
        alt='Away Team'
      ></img>
    </div>
  );
};

export default TripUpcomingItem;
