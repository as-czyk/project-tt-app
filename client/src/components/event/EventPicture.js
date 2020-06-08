import React, { useContext } from 'react';
//import sgeLogo from '../../resources/eintracht-logo.png';
//import wolfsburgLogo from '../../resources/Wolfsburg.png';
import UserContext from '../../context/user/UserContext';
import wcdLogo from '../../resources/wcd-logo.png';

import './event.scss';

const EventPicture = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;

  const nextEvent = event[0];

  if (event.event_name === 'World Club Dome') {
    return (
      <div className='event__wrapper'>
        <img src={wcdLogo} className='img-size' alt='WCD'></img>
      </div>
    );
  } else {
    return (
      <div className='event__wrapper'>
        <p>{nextEvent.club_id_home}</p>
        <p style={{ fontSize: '40px', margin: '10px' }}>:</p>
        <p>{nextEvent.club_id_away}</p>
      </div>
    );
  }
};

export default EventPicture;
