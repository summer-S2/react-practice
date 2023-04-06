import React from 'react';

export default function FilterButtons({ setFilter, name }) {


  return (
    <button
      className='p-3 dark:text-white font-bold'
      onClick={() => setFilter(name)}
    >{name}</button>
  );
}

