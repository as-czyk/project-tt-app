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
    return (
      <div className='background__wrapper'>
        <div className='chat__wrapper__empty'>
          <h1>You currently do no have reservation requests</h1>
          <h2>Offer a trip to find your passengers!</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className='background__wrapper'>
        <div className='chat__wrapper'>
          <h1 style={{ paddingTop: '20px' }}>My Notifications</h1>
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
