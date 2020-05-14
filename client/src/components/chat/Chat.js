import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import ReservationContext from '../../context/reservation/ReservationContext';

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
    return <p>Loading</p>;
  } else {
    return (
      <div>
        <h1>This is the Chat Componenent</h1>
        <p>Id der Reservierung: {reciviedReservation[0].reservation_id}</p>
        <p>
          Angefragte Sitze: {reciviedReservation[0].reservation_requested_seats}
        </p>
        <p>
          Freitext der Reservierung: {reciviedReservation[0].reservation_text}
        </p>
        <p>ID des Mitfahrer: {reciviedReservation[0].user_id}</p>
      </div>
    );
  }
};

export default Chat;
