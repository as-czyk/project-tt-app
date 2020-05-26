import React, { useContext } from 'react';
import UserContext from '../../context/user/UserContext';

import './footer.scss';

const Footer = () => {
  const userContext = useContext(UserContext);

  if (userContext.event === null) {
    return <div className='footer__wrapper__eventway'>&copy; Eventway</div>;
  } else {
    return <div className='footer__wrapper'>&copy; Eventway</div>;
  }
};

export default Footer;
