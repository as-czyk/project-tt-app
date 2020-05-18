import React, { useContext, useEffect } from 'react';
import Event from '../event/Event';
import Countdown from '../event/Countdown';
import FindSection from '../sections/FindSection';
import OfferSection from '../sections/OfferSection';
import WeatherSection from '../sections/WeatherSection';
import NextSection from '../sections/NextSections';

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
      <div className='home__wrapper'>
        <Countdown />
        <Event />
        <FindSection />
        <OfferSection />
        <WeatherSection />
        <NextSection />
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default Home;
