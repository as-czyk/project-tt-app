import React from 'react';

const AcceptedReservationItem = (props) => {
  const { reservation } = props;
  return <p>Reservierungs-ID: {reservation.reservation_id}</p>;
};

export default AcceptedReservationItem;
