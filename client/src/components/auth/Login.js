import React, { Fragment, useContext, useState, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';
import './auth.scss';

const Login = (props) => {
  const userContext = useContext(UserContext);

  const { login, isAuthenticated, error } = userContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  });

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      console.log('Please fill in fields');
    } else {
      login({
        user_email: email,
        user_password: password,
      });
    }
  };

  const { email, password } = user;

  return (
    <Fragment>
      <form onSubmit={onSubmit} className='auth__form'>
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
        <button type='submit' value='Login'>
          Login
        </button>
      </form>
    </Fragment>
  );
};

export default Login;
