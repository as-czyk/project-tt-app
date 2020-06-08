import React, { useContext, Fragment } from 'react';
import UserContext from '../../context/user/UserContext';
import EventPicture from '../event/EventPicture';
import UpComing from '../event/UpComing';
import './event.scss';

const Event = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  return (
    <Fragment>
      <div className='event__ctn'>
        <div className='event__ctn__inf'>
          <h1 className='event__text'>Next Game</h1>
          <div className='event_inf_ctn'>
            <div className='info__wrapper'>
              <i className='fas fa-thumbtack'></i>
              <p className='event__text'>{event[0].event_address}</p>
            </div>
            <div className='info__wrapper'>
              <i className='fas fa-calendar-day'></i>
              <p className='event__text'>{event[0].event_start_date}</p>
            </div>
            <div className='info__wrapper'>
              <i className='far fa-clock'></i>
              <p className='event__text'>{event[0].event_start_date}</p>
            </div>
          </div>
        </div>
        <div className='event__ctn__inf'>
          <EventPicture />
        </div>
      </div>
      <div className='event__ctn__sec'>
        <UpComing />
      </div>
    </Fragment>
  );
};

export default Event;
