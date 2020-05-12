import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import EventPicture from './EventPicture';
import './event.scss';

const Event = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  return (
    <div className='event__container'>
      <div className='event__ctn'>
        <EventPicture />
      </div>
      <div className='event__inf'>
        <h1>{event.event_name}</h1>
        <div className='event_inf_ctn'>
          <h2>Where?</h2>
          <p>{event.event_address}</p>
          <h2>When?</h2>
          <p>
            {event.event_start_date} at {event.event_start_time}
          </p>
          <h2>What else?</h2>
          <p>Event Spezifischer Content</p>
        </div>
      </div>
    </div>
  );
};

export default Event;
