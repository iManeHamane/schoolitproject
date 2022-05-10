import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className='loader-wrapper'>
      <div className='loader'>
        <div className='loader loader-inner' />
      </div>
    </div>
  );
}

export default Loader;
