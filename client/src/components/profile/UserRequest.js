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

  return (
    <div className='usertrips__container'>
      <h3>Overview Requests</h3>
      {requests.map((request) => (
        <UserRequestItem key={request.reservation_id} request={request} />
      ))}
    </div>
  );
};

export default UserRequest;
