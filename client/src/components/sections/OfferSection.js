import React from 'react';
import { Link } from 'react-router-dom';

import './sections.scss';

const OfferSection = () => {
  return (
    <div className='offerSection'>
      <Link className='link__section' to='/offertrip'>
        <h2 style={{ color: '#ffffff' }}>Offer a Trip</h2>
        <i className='fas fa-car fa-7x'></i>
      </Link>
    </div>
  );
};

export default OfferSection;
