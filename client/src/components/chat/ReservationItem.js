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
    seats: reservation_requested_seats,
    status: '',
  });

  const accept = () => {
    console.log(id);
    acceptReservation(id);
  };

  const decline = () => {
    setId({
      ...id,
      status: 'declined',
    });
    declineReservation(id);
  };

  const acceptHover = () => {
    setId({
      ...id,
      status: 'accepted',
    });
  };

  const declineHover = () => {
    setId({
      ...id,
      status: 'declined',
    });
  };

  return (
    <div className='reservation__item__wrapper'>
      <p>Id: {reservation_id}</p>
      <p>Sitze: {reservation_requested_seats}</p>
      <p>Texte: {reservation_text}</p>
      <p>UserId: {user_id}</p>
      <div className='reservation__button__wrapper'>
        <button onClick={accept} onMouseOver={acceptHover} className='button'>
          Anfrage bestätigen
        </button>
        <button onClick={decline} onMouseOver={declineHover} className='button'>
          Anfrage ablehnen
        </button>
      </div>
    </div>
  );
};

export default ReservationItem;
