import React from 'react';

const AcceptedReservationItem = (props) => {
  const { reservation } = props;
  return (
    <div className='reservation__container__details'>
      <p>
        Reservation-ID: {reservation.reservation_id} | Reservated Seats:{' '}
        {reservation.reservation_requested_seats} | Passenger-ID:{' '}
        {reservation.user_id}
      </p>
      <i class='fas fa-check fa-2x'></i>
    </div>
  );
};

export default AcceptedReservationItem;
