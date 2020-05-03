import React, { Fragment } from 'react';
import './auth.scss';

const Register = () => {
  return (
    <Fragment>
      <form className='auth__form'>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <input
          type='password'
          name='password2'
          placeholder='Confirm Password'
        />
        <input type='text' name='tickerID' placeholder='Ticket ID' />
      </form>
    </Fragment>
  );
};

export default Register;
