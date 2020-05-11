import React, { Fragment, useState, useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import AlertContext from '../../context/alert/AlertContext';
import Alerts from './Alerts';
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
    user_ticket_ID: '',
  });

  const { username, user_email, user_password, user_ticket_ID } = user;

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
      username == '' ||
      user_email == '' ||
      user_password == '' ||
      user_ticket_ID == ''
    ) {
      alertState.setAlert('Please fill in all fields', 'danger');
    } else {
      userContext.registerUser(user);
    }
    setUser({
      username: '',
      user_email: '',
      user_password: '',
      user_ticket_ID: '',
    });
  };

  return (
    <Fragment>
      <Alerts />
      <form onSubmit={onSubmit} className='auth__form'>
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
            type='password'
            name='user_password'
            placeholder='Password'
            value={user_password}
            onChange={onChange}
          />
        </div>
        <div className='input__wrapper'>
          <i className='fas fa-key fa-lg'></i>
          <input
            type='password'
            name='user_password2'
            placeholder='Confirm Password'
          />
        </div>
        <div className='input__wrapper'>
          <i className='fas fa-ticket-alt fa-lg'></i>
          <input
            type='text'
            name='user_ticket_ID'
            placeholder='Ticket ID'
            value={user_ticket_ID}
            onChange={onChange}
          />
        </div>
        <button type='submit' value='Login'>
          Register
        </button>
      </form>
    </Fragment>
  );
};

export default Register;
