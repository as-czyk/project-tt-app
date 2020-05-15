import React from 'react';
import logo from './Logo.svg';

import './auth.scss';

const Logo = () => {
  return (
    <div className='logo__wrapper'>
      <img src={logo} width={500} height={150} alt='Logo' />
    </div>
  );
};

export default Logo;
