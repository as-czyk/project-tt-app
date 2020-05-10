import React, { useContext, useState } from 'react';
import UserContext from '../../context/user/UserContext';

const Countdown = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;
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

  console.log(event.event_start_time);

  setTimeout(() => {
    const time = getTimeToEvent(event.event_start_date, event.event_start_time);
    setCounter({
      days: time.days,
      hours: time.hours,
      minutes: time.minutes,
      seconds: time.seconds,
    });
  }, 1000);

  return (
    <div className='counter__wrapper'>
      <p>Days: {counter.days}</p>
      <p>Hours: {counter.hours}</p>
      <p>Minutes: {counter.minutes}</p>
      <p>Seconds: {counter.seconds}</p>
    </div>
  );
};

export default Countdown;
