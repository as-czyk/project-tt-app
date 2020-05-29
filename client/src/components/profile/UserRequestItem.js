import React, { Fragment } from 'react';

const UserRequestItem = (props) => {
  const { request } = props;

  const setIcon = (status) => {
    switch (status) {
      case 'accepted':
        return <i class='fas fa-check'></i>;

      case 'pending':
        return <i class='fas fa-ellipsis-h'></i>;

      case 'declined':
        return <i class='fas fa-times'></i>;

      default:
        return <i class='fas fa-ellipsis-h'></i>;
    }
  };

  return (
    <div className='userequests__container__details'>
      <p>
        Reservierungs-ID: {request.reservation_id} | 
        {setIcon(request.reservation_status)}
      </p>
    </div>
  );
};

export default UserRequestItem;
