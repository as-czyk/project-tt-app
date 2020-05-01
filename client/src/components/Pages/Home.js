import React, { Fragment } from 'react';
import Event from '../event/Event';
import Weather from '../weather/Weather';

const Home = () => {
  return (
    <Fragment>
      <Event />
      <Weather />
    </Fragment>
  );
};

export default Home;
