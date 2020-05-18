import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import ReservationContext from '../../context/reservation/ReservationContext';
import ReservationItem from './ReservationItem';

import './chat.scss';

const Chat = () => {
  const userContext = useContext(UserContext);
  const reservationContext = useContext(ReservationContext);

  const { getReservation, reciviedReservation } = reservationContext;
  const { user } = userContext;

  useEffect(() => {
    getReservation(user.user.user_id);
    // eslint-disable-next-line
  }, []);

  if (!reciviedReservation.length) {
    return <p>There are currently no Reservation Requests</p>;
  } else {
    return (
      <div>
        <h1>This is the Reservation Componenent</h1>
        <div className='chat__wrapper'>
          {reciviedReservation.map((reservation) => (
            <ReservationItem
              key={reservation.reservation_id}
              reservation={reservation}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Chat;
