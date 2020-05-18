import React, { useContext, useState } from 'react';
import ReservationContext from '../../context/reservation/ReservationContext';

import './chat.scss';

const ReservationItem = ({ reservation }) => {
  const reservationContext = useContext(ReservationContext);
  const { acceptReservation, declineReservation } = reservationContext;

  const {
    reservation_id,
    reservation_requested_seats,
    reservation_text,
    user_id,
  } = reservation;

  const [id, setId] = useState({
    id: reservation_id,
  });

  const accept = () => {
    acceptReservation(id);
  };

  const decline = () => {
    declineReservation(id);
  };

  return (
    <div className='reservation__item__wrapper'>
      <p>Id: {reservation_id}</p>
      <p>Sitze: {reservation_requested_seats}</p>
      <p>Texte: {reservation_text}</p>
      <p>UserId: {user_id}</p>
      <div className='reservation__button__wrapper'>
        <button onClick={accept} className='button'>
          Anfrage bestätigen
        </button>
        <button onClick={decline} className='button'>
          Anfrage ablehnen
        </button>
      </div>
    </div>
  );
};

export default ReservationItem;
