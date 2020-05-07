import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import './event.scss';

const Event = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  return (
    <div className='event__container'>
      <div className='event__ctn'>
        <p>Image</p>
      </div>
      <div className='event__inf'>
        <p>Event Address: {event.event_address}</p>
        <p>Event Enddatum: {event.event_end_date}</p>
        <p>Event Endzeit: {event.event_end_time}</p>
        <p>Event Name: {event.event_name}</p>
        <p>Event Startdatum: {event.event_start_time}</p>
        <p>Event Startzeit: {event.event_start_date}</p>
      </div>
    </div>
  );
};

export default Event;
