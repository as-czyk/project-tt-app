import React, { useState } from 'react';

const TripUpcomingItem = (props) => {
  const { event } = props;

  useState({
    id: event.Id,
  });

  return (
    <div className='tripsUpcoming__item__container'>
      <p>{event.Name}</p>
      <p>{event.Id}</p>
    </div>
  );
};

export default TripUpcomingItem;
