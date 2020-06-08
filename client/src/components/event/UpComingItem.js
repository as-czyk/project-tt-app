import React from 'react';

const UpComingItem = (props) => {
  const { event } = props;

  return (
    <div className='upcoming__game__box'>
      <p>{event.club_id_home}</p>
      <p>:</p>
      <p>{event.club_id_away}</p>
    </div>
  );
};

export default UpComingItem;
