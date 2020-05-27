import React, { useContext, useEffect } from 'react';
import ReservationContext from '../../context/reservation/ReservationContext';
import UserContext from '../../context/user/UserContext';

import AcceptedReservationItem from './AcceptedReservationItem';

import './profile.scss';

const UserReservation = () => {
  const reservationContext = useContext(ReservationContext);
  const userContext = useContext(UserContext);

  const { acceptedReservation, getAcceptedReservation } = reservationContext;
  const { user } = userContext;

  useEffect(() => {
    getAcceptedReservation(user.user.user_id);
    // eslint-disable-next-line
  }, []);

  console.log(acceptedReservation);

  if (acceptedReservation.length === 0) {
    return (
      <div className='reservation__container'>
        <h1 style={{ paddingLeft: '20px' }}>Your accepted Reservation</h1>
        <div className='empty__container__text'>
          <p>You do not have any accepted reservations!</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='reservation__container'>
        <h1 style={{ paddingLeft: '20px' }}>Your accepted Reservation</h1>
        {acceptedReservation.map((reservation) => (
          <AcceptedReservationItem
            key={reservation.reservation_id}
            reservation={reservation}
          />
        ))}
      </div>
    );
  }
};

export default UserReservation;
