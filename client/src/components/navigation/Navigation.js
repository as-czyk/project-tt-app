import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

import './navigation.scss';

const Navigation = () => {
  const userContext = useContext(UserContext);
  const { isAuthenticated, user } = userContext;

  const onLogout = () => {
    userContext.logout();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <Link to='/trips'>Find Trips</Link>
      </li>
      <li>
        <Link to='/offertrip'>Offer Trip</Link>
      </li>
      <li>
        <a onClick={onLogout} href='/login'>
          <i className='fas fa-sign-out-alt'>
            <span className='hide-sm'></span>
          </i>
        </a>
      </li>
    </Fragment>
  );

  const freeLinks = (
    <Fragment>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className='nav__wrapper'>
      <ul>{isAuthenticated ? authLinks : freeLinks}</ul>
    </nav>
  );
};

export default Navigation;
