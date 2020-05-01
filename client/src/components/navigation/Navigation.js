import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

const Navigation = () => {
  return (
    <nav className='nav__wrapper'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/trips'>Find Trips</Link>
        </li>
        <li>
          <Link to='/trips'>Offer Trip</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
