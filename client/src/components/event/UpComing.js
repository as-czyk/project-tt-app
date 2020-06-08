import React, { Fragment, useContext } from 'react';
import UserContext from '../../context/user/UserContext';

//import sgeLogo from '../../resources/eintracht-logo.png';
//import hertha from '../../resources/hertha.png';
//import mainz from '../../resources/main.png';
import UpComingItem from './UpComingItem';

const UpComing = () => {
  const userContext = useContext(UserContext);
  const { event } = userContext;
  const size = 4;

  const events = event.slice(1, size);
  console.log(events);

  return (
    <Fragment>
      <h1>Upcoming</h1>
      {events.map((event) => (
        <UpComingItem key={event.event_id} event={event} />
      ))}
    </Fragment>
  );
};

export default UpComing;
