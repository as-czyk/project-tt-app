import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation__container'>
      <nav>
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
    </div>
  );
};

export default Navigation;
