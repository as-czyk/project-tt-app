import React, { useContext, useState } from 'react';
import ReservationContext from '../../context/reservation/ReservationContext';
import UserContext from '../../context/user/UserContext';

import './chat.scss';

const ReservationItem = ({ reservation }) => {
  const reservationContext = useContext(ReservationContext);
  const userContext = useContext(UserContext);

  const { acceptReservation, declineReservation } = reservationContext;
  const { event } = userContext;

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
      <div className='reservation__item__header'>
        <p style={{ paddingLeft: '20px' }}>
          {event.event_start_date} | {event.event_start_time} | Mitfahreranfrage
          | {reservation_requested_seats} Plätze
        </p>
      </div>
      <div className='reservation__item__content__wrapper'>
        <div className='reservation__item__content'>
          <b>Nachricht des Mitfahrers:</b>
          <p>{reservation_text}</p>
          <b>Angefragte Plätze: {reservation_requested_seats}</b>
        </div>
        <div className='reservation__item__buttons'>
          <button
            onClick={accept}
            onMouseOver={acceptHover}
            className='button__sge__2'
          >
            Anfrage bestätigen
          </button>
          <button
            onClick={decline}
            onMouseOver={declineHover}
            className='button__sge__1'
          >
            Anfrage ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationItem;
