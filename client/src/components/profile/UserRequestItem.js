import React from 'react';

const UserRequestItem = (props) => {
  const { request } = props;
  return (
    <div>
      <p>Reservierungs-ID: {request.reservation_id}</p>
      <p>Status: {request.status}</p>
    </div>
  );
};

export default UserRequestItem;
