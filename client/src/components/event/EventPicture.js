import React, { useContext } from 'react';
import pictureClubdome from './worldclubdome.jpg';
import pictureRock from './rockamring.jpg';
import UserContext from '../../context/user/UserContext';

const EventPicture = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  return (
    <img
      className='event__picture'
      src={
        event.event_name === 'World Club Dome' ? pictureClubdome : pictureRock
      }
    ></img>
  );
};

export default EventPicture;
