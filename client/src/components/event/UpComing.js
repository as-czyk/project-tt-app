import React, { Fragment } from 'react';

import sgeLogo from '../../resources/eintracht-logo.png';
import hertha from '../../resources/hertha.png';
import mainz from '../../resources/main.png';

const UpComing = () => {
  return (
    <Fragment>
      <h1>Upcoming</h1>
      <div className='upcoming__game__box'>
        <img src={sgeLogo} alt='Logo' />
        <p>:</p>
        <img src={mainz} alt='Logo' />
      </div>
      <div className='upcoming__game__box'>
        <img src={hertha} alt='Logo' />
        <p>:</p>
        <img src={sgeLogo} alt='Logo' />
      </div>
    </Fragment>
  );
};

export default UpComing;
