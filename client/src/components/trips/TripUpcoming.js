import React, { useContext } from 'react';
import UserContext from '../../context/user/UserContext';
import TripUpcomingItem from './TripUpcomingItem';

const TripUpcoming = () => {
  const userContext = useContext(UserContext);
  const size = 3;
  const { event } = userContext;

  const events = event.slice(0, size);

  return (
    <div className='tripsUpcoming__container'>
      {events.map((event) => (
        <TripUpcomingItem key={event.event_id} event={event} />
      ))}
    </div>
  );
};

export default TripUpcoming;
