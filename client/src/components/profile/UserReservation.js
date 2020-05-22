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

  return (
    <div className='usertrips__container'>
      <h3>Deine akzeptierten Reservierungen</h3>
      {acceptedReservation.map((reservation) => (
        <AcceptedReservationItem
          key={reservation.reservation_id}
          reservation={reservation}
        />
      ))}
    </div>
  );
};

export default UserReservation;
