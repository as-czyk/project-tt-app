import React, { useState } from 'react';

const TripUpcomingItem = (props) => {
  const { event } = props;

  useState({
    id: event.event_id,
  });

  return (
    <div className='tripsUpcoming__item__container'>
      <p>{event.event_name}</p>
      <p>{event.client_id}</p>
    </div>
  );
};

export default TripUpcomingItem;
