import React, { Fragment, useState } from 'react';

const TripsSearch = () => {
  return (
    <form class='search__trips'>
      <input
        className='search__bar'
        type='text'
        placeholder='name'
        name='name'
      />
    </form>
  );
};

export default TripsSearch;
