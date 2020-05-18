import React, { useContext } from 'react';
import sgeLogo from '../../resources/eintracht-logo.png';
import bayernLogo from '../../resources/bayern-logo.png';
import UserContext from '../../context/user/UserContext';

const EventPicture = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  return (
    <div className='event__wrapper'>
      <img src={sgeLogo} className='img-size'></img>
      <p>:</p>
      <img src={bayernLogo} className='img-size'></img>
    </div>
  );
};

export default EventPicture;
