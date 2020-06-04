import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import AlertState from '../../context/alert/AlertContext';
import Alerts from './Alerts';
import Logo from './Logo';

import './auth.scss';

const Login = (props) => {
  const userContext = useContext(UserContext);
  const alertState = useContext(AlertState);

  const { login, isAuthenticated, error, clearErrors } = userContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Please provide valid credentials') {
      alertState.setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alertState.setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        user_email: email,
        user_password: password,
      });
    }
  };

  const { email, password } = user;

  return (
    <div className='auth__wrapper'>
      <Logo />
      <form onSubmit={onSubmit} className='auth__form__login'>
        <div className='input__wrapper'>
          <i className='far fa-envelope fa-lg'></i>
          <input
            onChange={onChange}
            type='email'
            name='email'
            placeholder='E-Mail'
          />
        </div>
        <div className='input__wrapper'>
          <i className='fas fa-key fa-lg'></i>
          <input
            onChange={onChange}
            type='password'
            name='password'
            placeholder='Password'
          />
        </div>
        <Alerts />
        <button type='submit' value='Login' className='auth__button'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
