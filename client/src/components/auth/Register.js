import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import AlertContext from '../../context/alert/AlertContext';
import Alerts from './Alerts';
import Logo from './Logo';

import './auth.scss';

const Register = (props) => {
  const alertState = useContext(AlertContext);
  const userContext = useContext(UserContext);

  const { setAlert } = alertState;
  const { error, clearErrors, isAuthenticated } = userContext;

  const [user, setUser] = useState({
    username: '',
    user_email: '',
    user_password: '',
    client_id: '',
  });

  const { username, user_email, user_password, client_id } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'the user already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      username === '' ||
      user_email === '' ||
      user_password === '' ||
      client_id === ''
    ) {
      alertState.setAlert('Please fill in all fields', 'danger');
    } else {
      userContext.registerUser(user);
    }
    setUser({
      username: '',
      user_email: '',
      user_password: '',
      event: '',
    });
  };

  const [password, setPassword] = useState({
    passwordActive: false,
  });

  const showPassword = () => {
    setPassword({ passwordActive: !password.passwordActive });
  };

  return (
    <div className='auth__wrapper'>
      <Logo />
      <form onSubmit={onSubmit} className='auth__form__register'>
        <div className='input__wrapper'>
          <i className='fas fa-user fa-lg'></i>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={onChange}
          />
        </div>
        <div className='input__wrapper'>
          <i className='far fa-envelope fa-lg'></i>
          <input
            type='email'
            name='user_email'
            placeholder='Email'
            value={user_email}
            onChange={onChange}
          />
        </div>
        <div className='input__wrapper'>
          <i className='fas fa-key fa-lg'></i>
          <input
            type={password.passwordActive ? 'text' : 'password'}
            name='user_password'
            placeholder='Password'
            value={user_password}
            onChange={onChange}
          />
          {password.passwordActive ? (
            <i className='fas fa-eye-slash' onClick={showPassword}></i>
          ) : (
            <i className='fas fa-eye' onClick={showPassword}></i>
          )}
        </div>
        <div className='input__wrapper'>
          <i className='fas fa-key fa-lg'></i>
          <input
            type={password.passwordActive ? 'text' : 'password'}
            name='user_password2'
            placeholder='Confirm Password'
          />
          {password.passwordActive ? (
            <i className='fas fa-eye-slash' onClick={showPassword}></i>
          ) : (
            <i className='fas fa-eye' onClick={showPassword}></i>
          )}
        </div>
        <div className='input__wrapper__dropdown'>
          <select
            value={user.client_id}
            onChange={onChange}
            name='client_id'
            selected='Please select your event'
          >
            <option value='' seclected disabled hidden>
              Please select your event
            </option>
            <option value='96c55241-eede-4102-ab0b-4d25cadff77e'>
              Eintracht Frankfurt
            </option>
          </select>
        </div>
        <Alerts />
        <button type='submit' value='Login' className='auth__button'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
