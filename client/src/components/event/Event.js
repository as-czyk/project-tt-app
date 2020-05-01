import React, { useContext } from 'react';
import './event.scss';

const Event = () => {
  return (
    <div className='event__container'>
      <div className='event__ctn'>
        <p>Image</p>
      </div>
      <div className='event__inf'>
        <h2>Context spezifische Informationen zum Event</h2>
        <p>EventID</p>
        <p>api/getUser</p>
        <p>Ideen: Counter bis zum Event, Lokalität des Events, Image</p>
      </div>
    </div>
  );
};

export default Event;
