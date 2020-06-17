import React from 'react';

const UpComingItem = (props) => {
  const { event } = props;

  return (
    <div className='upcoming__game__box'>
      <img
        src={`/images/${event.club_id_home}.png`}
        alt='Home Team'
        className='upcoming__logo__wrapper'
      />
      <p style={{ fontSize: '30px' }}>:</p>
      <img
        src={`/images/${event.club_id_away}.png`}
        alt='Away Team'
        className='upcoming__logo__wrapper'
      />
    </div>
  );
};

export default UpComingItem;
