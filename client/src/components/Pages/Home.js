import React, { Fragment, useContext, useEffect } from 'react';
import Event from '../event/Event';
import Weather from '../weather/Weather';
import Countdown from '../event/Countdown';

import UserContext from '../../context/user/UserContext';

const Home = () => {
  const userContext = useContext(UserContext);
  const { event, loading, loadEvent, user } = userContext;

  useEffect(() => {
    if (!loading && user !== undefined) {
      loadEvent(user.user.event_id);
    }
    // eslint-disable-next-line
  }, [loading]);

  if (!loading && event !== undefined) {
    return (
      <Fragment>
        <Countdown />
        <Event />
        <Weather />
      </Fragment>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default Home;
