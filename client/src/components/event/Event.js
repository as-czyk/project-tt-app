import React, { useContext, Fragment } from 'react';
import UserContext from '../../context/user/UserContext';
import EventPicture from '../event/EventPicture';
import './event.scss';

const Event = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  return (
    <Fragment>
      <div className='event__ctn'>
        <div className='event__ctn__inf'>
          <h1>Next Event</h1>
          <div className='event_inf_ctn'>
            <div className='info__wrapper'>
              <i class='fas fa-thumbtack'></i>
              <p>{event.event_address}</p>
            </div>
            <div className='info__wrapper'>
              <i class='fas fa-calendar-day'></i>
              <p>{event.event_start_date}</p>
            </div>
            <div className='info__wrapper'>
              <i class='far fa-clock'></i>
              <p>{event.event_start_time}</p>
            </div>
          </div>
        </div>
        <div className='event__ctn__inf'>
          <EventPicture />
        </div>
      </div>
      <div className='event__ctn__sec'></div>
    </Fragment>
  );
};

export default Event;
