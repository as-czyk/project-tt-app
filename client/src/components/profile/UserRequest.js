import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import ReservationContext from '../../context/reservation/ReservationContext';

import UserRequestItem from '../profile/UserRequestItem';

const UserRequest = () => {
  const userContext = useContext(UserContext);
  const reservationContext = useContext(ReservationContext);

  const { user } = userContext;
  const { getReservationRequests, requests } = reservationContext;

  useEffect(() => {
    getReservationRequests(user.user.user_id);
    // eslint-disable-next-line
  }, []);

  if (requests.length === 0) {
    return (
      <div className='userequests__container'>
        <h1 style={{ paddingLeft: '20px' }}>Overview requests</h1>
        <div className='empty__container__text'>
          <p>You did not make any requests!</p>
        </div>
      </div>
    );
  }
  return (
    <div className='userequests__container'>
      <h1 style={{ paddingLeft: '20px' }}>Overview requests</h1>
      {requests.map((request) => (
        <UserRequestItem key={request.reservation_id} request={request} />
      ))}
    </div>
  );
};

export default UserRequest;
