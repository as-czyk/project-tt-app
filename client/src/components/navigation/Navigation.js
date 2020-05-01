import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation__container'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/trips'>Trips</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
