import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import sgeLogo from '../../resources/eintracht-logo.png';
//import { stack as Menu } from 'react-burger-menu';

import './navigation.scss';

const Navigation = () => {
  const userContext = useContext(UserContext);
  const { isAuthenticated } = userContext;

  const onLogout = () => {
    userContext.logout();
  };

  const authLinks = (
    <Fragment>
      <img className='custom__logo__wrapper' src={sgeLogo} alt='Logo' />
      <Link to='/'>
        <li className='navigation__authLinks' style={{ marginTop: '30px' }}>
          Home
        </li>
      </Link>
      <Link to='/profile'>
        <li className='navigation__authLinks'>Profile</li>
      </Link>
      <Link to='/trips'>
        <li className='navigation__authLinks'>Find Trips</li>
      </Link>
      <Link to='/offertrip'>
        <li className='navigation__authLinks'>Offer Trips</li>
      </Link>
      <Link to='/chat'>
        <li className='navigation__authLinks'>Notifications</li>
      </Link>
      <li className='navigation__logoutLink'>
        <a onClick={onLogout} href='/login'>
          <i className='fas fa-sign-out-alt fa-lg'>
            <span className='hide-sm'></span>
          </i>
        </a>
      </li>
    </Fragment>
  );

  const freeLinks = (
    <Fragment>
      <Link to='/login'>
        <li className='navigation__freeLinks' style={{ marginTop: '50px' }}>
          Login
        </li>
      </Link>
      <Link to='/register'>
        <li className='navigation__freeLinks'>Register</li>
      </Link>
    </Fragment>
  );

  return (
    <nav className='nav__wrapper'>
      <ul>{isAuthenticated ? authLinks : freeLinks}</ul>
    </nav>
  );
};

export default Navigation;
