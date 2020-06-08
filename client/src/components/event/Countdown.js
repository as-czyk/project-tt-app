import React, { useContext, useState } from 'react';
import UserContext from '../../context/user/UserContext';

import './event.scss';

const Countdown = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;
  const nextEvent = event[0];
  const [counter, setCounter] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  });

  const getTimeToEvent = (endD, endT) => {
    const oneDay = 1000 * 60 * 60 * 24;
    const startDate = new Date();
    const endDate = new Date(`${endD}T${endT}`);
    let diff = endDate - startDate;

    let day = Math.floor(diff / oneDay - 1);
    let hour = Math.floor(24 - startDate.getHours());
    let minute = Math.floor(60 - startDate.getMinutes());
    let second = Math.floor(60 - startDate.getSeconds());

    return {
      days: day,
      hours: hour,
      minutes: minute,
      seconds: second,
    };
  };

  setTimeout(() => {
    const time = getTimeToEvent(
      nextEvent.event_start_date,
      /*event.event_start_time*/ '18:00:00'
    );
    setCounter({
      days: time.days,
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });
  }, 1000);

  return (
    <div className='counter__wrapper'>
      <p className='counter__text'>Days</p>
      <p className='count'>{counter.days}</p>
      <p className='counter__text'>Hours</p>
      <p className='count'>{counter.hours}</p>
      <p className='counter__text'>Minutes</p>
      <p className='count'>{counter.minutes}</p>
      <p className='counter__text'>Seconds</p>
      <p className='count'>{counter.seconds}</p>
    </div>
  );
};

export default Countdown;
