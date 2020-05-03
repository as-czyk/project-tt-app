import React, { Fragment } from 'react';
import './auth.scss';

const Login = () => {
  return (
    <Fragment>
      <form className='auth__form'>
        <input type='email' name='email' placeholder='E-Mail' />
        <input type='password' name='password' placeholder='Password' />
      </form>
    </Fragment>
  );
};

export default Login;
