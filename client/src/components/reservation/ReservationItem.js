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
          {event[0].event_start_date} | {event[0].event_start_time} | Passenger
          request | {reservation_requested_seats} Seats
        </p>
      </div>
      <div className='reservation__item__content__wrapper'>
        <div className='reservation__item__content'>
          <b>Message from the passenger:</b>
          <p>{reservation_text}</p>
          <b>Requested Seats: {reservation_requested_seats}</b>
        </div>
        <div className='reservation__item__buttons'>
          <button
            onClick={accept}
            onMouseOver={acceptHover}
            className='button__sge__2'
          >
            Confirm request
          </button>
          <button
            onClick={decline}
            onMouseOver={declineHover}
            className='button__sge__1'
          >
            Decline request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationItem;
