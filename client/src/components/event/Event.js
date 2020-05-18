import React, { useContext, Fragment } from 'react';
import UserContext from '../../context/user/UserContext';
import EventPicture from './EventPicture';
import './event.scss';

const Event = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  return (
    <Fragment>
      <div className='event__ctn'>
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
      <div className='event__ctn__sec'>
        <p>Test</p>
      </div>
    </Fragment>
  );
};

export default Event;
