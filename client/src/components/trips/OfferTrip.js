import React, { useState, useContext } from 'react';
import UserContext from '../../context/user/UserContext';

import TripsDetails from './TripsSteps/TripsDetails';
import TripsInfo from './TripsSteps/TripsInfo';
import TripsText from './TripsSteps/TripsText';
import Confirm from './TripsSteps/Confirm';
import Success from './TripsSteps/Success';

import './trips.scss';

const OfferTrip = () => {
  const userContext = useContext(UserContext);

  const { user, event } = userContext;

  const [trip, setTrip] = useState({
    step: 1,
    pickup_zip_code: '',
    journey_start_time: '',
    journey_car: '',
    journey_text: '',
    journey_empty_spaces: '',
    journey_date: '',
    journey_money: undefined,
    user_id: user.user.user_id,
    event_id: '',
  });

  const { step } = trip;

  const onChange = (e) => {
    setTrip({
      ...trip,
      [e.target.name]:
        e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    });
  };

  const nextStep = () => {
    const { step } = trip;
    setTrip({
      ...trip,
      step: step + 1,
    });
  };

  const previousStep = () => {
    const { step } = trip;
    setTrip({
      ...trip,
      step: step - 1,
    });
  };

  switch (step) {
    case 1:
      return (
        <TripsDetails
          nextStep={nextStep}
          onChange={onChange}
          trip={trip}
          step={step}
        />
      );
    case 2:
      return (
        <TripsInfo
          nextStep={nextStep}
          previousStep={previousStep}
          onChange={onChange}
          trip={trip}
          step={step}
        />
      );
    case 3:
      return (
        <TripsText
          nextStep={nextStep}
          previousStep={previousStep}
          onChange={onChange}
          trip={trip}
          step={step}
        />
      );
    case 4:
      return (
        <Confirm
          previousStep={previousStep}
          trip={trip}
          step={step}
          nextStep={nextStep}
          setTrip={setTrip}
        />
      );
    case 5:
      return <Success />;

    default:
      return 'An error occured';
  }
};
export default OfferTrip;
