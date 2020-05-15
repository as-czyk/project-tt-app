import React, { useContext } from 'react';
import pictureClubdome from './worldclubdome.jpg';
import pictureSGE from './eintracht.jpg';
import UserContext from '../../context/user/UserContext';

const EventPicture = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  return (
    <img
      className='event__picture'
      alt='Event'
      src={
        event.event_name === 'World Club Dome' ? pictureClubdome : pictureSGE
      }
    ></img>
  );
};

export default EventPicture;
