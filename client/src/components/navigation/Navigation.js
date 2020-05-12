import React, { useContext, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
//import { stack as Menu } from 'react-burger-menu';

import './navigation.scss';

const Navigation = () => {
  const userContext = useContext(UserContext);
  const { isAuthenticated, user } = userContext;
  const [active, setActive] = useState({
    activeItem: 'login',
  });

  const onLogout = () => {
    userContext.logout();
  };

  const authLinks = (
    <Fragment>
      <Link to='/'>
        <li className='navigation__authLinks'>Home</li>
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
      <Link to='/offertrip'>
        <li className='navigation__authLinks'>Nachrichten</li>
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
        <li className='navigation__freeLinks'>Login</li>
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
