import React, { useContext } from 'react';
import sgeLogo from '../../resources/eintracht-logo.png';
import bayernLogo from '../../resources/bayern-logo.png';
import UserContext from '../../context/user/UserContext';
import wcdLogo from '../../resources/wcd-logo.png';

const EventPicture = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  if (event.event_name === 'World Club Dome') {
    return (
      <div className='event__wrapper'>
        <img src={wcdLogo} className='img-size' alt='WCD'></img>
      </div>
    );
  } else {
    return (
      <div className='event__wrapper'>
        <img src={sgeLogo} className='img-size' alt='Eintracht Frankfurt'></img>
        <p style={{ fontSize: '40px' }}> : </p>
        <img src={bayernLogo} className='img-size' alt='FC Bayern Munich'></img>
      </div>
    );
  }
};

export default EventPicture;
