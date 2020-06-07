import React from 'react';
import TripUpcomingItem from './TripUpcomingItem';

const TripUpcoming = () => {
  const events = [
    {
      Id: '1',
      Name: 'Spiel 1',
    },
    {
      Id: '2',
      Name: 'Spiel 2',
    },
    {
      Id: '3',
      Name: 'Spiel3',
    },
  ];

  return (
    <div className='tripsUpcoming__container'>
      {events.map((event) => (
        <TripUpcomingItem key={event.Id} event={event} />
      ))}
    </div>
  );
};

export default TripUpcoming;
