import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import './trips.scss';

const TripItem = ({ trip }) => {
  const userContext = useContext(UserContext);

  const [current, setCurrent] = useState({
    id: '',
  });

  useEffect(() => {
    setCurrent({
      id: journey_id,
      user_id: userContext.user.user.user_id,
    });
    // eslint-disable-next-line
  }, []);

  const {
    journey_id,
    journey_date,
    journey_empty_spaces,
    journey_text,
    pickup_zip_code,
    journey_start_time,
    journey_money,
  } = trip;

  return (
    <div className='trips__container'>
      <div className='trips__container__left'>
        <h2>Trip Details</h2>
        <div className='trip__details'>
          <div className='info__wrapper'>
            <i className='fas fa-thumbtack'></i>
            <p>{pickup_zip_code}</p>
          </div>
          <div className='info__wrapper'>
            <i className='fas fa-calendar-day'></i>
            <p>{journey_date}</p>
          </div>
          <div className='info__wrapper'>
            <i class='fas fa-clock'></i>
            <p>{journey_start_time}</p>
          </div>
          <div className='info__wrapper'>
            <i class='fas fa-euro-sign'></i>
            <p>{journey_money}</p>
          </div>
          <div className='info__wrapper'>
            <p>Available Seats: {journey_empty_spaces}</p>
          </div>
        </div>
      </div>
      <div className='trips__container__right'>
        <i>"{journey_text}"</i>
        <Link
          to={{
            pathname: '/tripsreservation',
            state: {
              current,
            },
          }}
        >
          <button className='button__trips'> Make a Reservation</button>
        </Link>
      </div>
    </div>
  );
};

export default TripItem;
