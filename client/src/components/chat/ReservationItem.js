import React from 'react';

import './chat.scss';

const ReservationItem = ({ reservation }) => {
  const {
    reservation_id,
    reservation_requested_seats,
    reservation_text,
    user_id,
  } = reservation;

  return (
    <div className='reservation__item__wrapper'>
      <p>Id: {reservation_id}</p>
      <p>Sitze: {reservation_requested_seats}</p>
      <p>Texte: {reservation_text}</p>
      <p>UserId: {user_id}</p>
      <div className='reservation__button__wrapper'>
        <button className='button'>Anfrage bestätigen</button>
        <button className='button'>Anfrage ablehnen</button>
      </div>
    </div>
  );
};

export default ReservationItem;
