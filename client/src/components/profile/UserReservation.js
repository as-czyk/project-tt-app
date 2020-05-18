import React, { useContext, useEffect } from 'react';
import ReservationContext from '../../context/reservation/ReservationContext';

import './profile.scss';

const UserReservation = () => {
  const reservationContext = useContext(ReservationContext);
  const { acceptedReservation } = reservationContext;

  useEffect(() => {}, []);

  return (
    <div className='usertrips__container'>
      <h3>Deine akzeptierten Reservierungen</h3>
    </div>
  );
};

export default UserReservation;
