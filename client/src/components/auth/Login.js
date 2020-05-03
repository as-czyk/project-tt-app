import React, { Fragment } from 'react';
import './auth.scss';

const Login = () => {
  return (
    <Fragment>
      <form className='auth__form'>
        <div className='input__wrapper'>
          <i class='far fa-envelope fa-lg'></i>
          <input type='email' name='email' placeholder='E-Mail' />
        </div>
        <div className='input__wrapper'>
          <i class='fas fa-key fa-lg'></i>
          <input type='password' name='password' placeholder='Password' />
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
