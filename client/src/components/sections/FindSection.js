import React from 'react';
import { Link } from 'react-router-dom';

import './sections.scss';

const FindSection = () => {
  return (
    <div className='findSection'>
      <Link className='link__section' to='/trips'>
        <h2>Find a Trip</h2>
        <i class='fas fa-search fa-7x'></i>
      </Link>
    </div>
  );
};

export default FindSection;
