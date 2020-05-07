import React, { Fragment } from 'react';
import './auth.scss';

const Register = () => {
  return (
    <Fragment>
      <form className='auth__form'>
        <div className='input__wrapper'>
          <i className='far fa-envelope fa-lg'></i>
          <input type='email' name='email' placeholder='Email' />
        </div>
        <div className='input__wrapper'>
          <i className='fas fa-key fa-lg'></i>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <div className='input__wrapper'>
          <i className='fas fa-key fa-lg'></i>
          <input
            type='password'
            name='password2'
            placeholder='Confirm Password'
          />
        </div>
        <div className='input__wrapper'>
          <i className='fas fa-ticket-alt fa-lg'></i>
          <input type='text' name='tickerID' placeholder='Ticket ID' />
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
