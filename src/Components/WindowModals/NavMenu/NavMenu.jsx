import React from 'react';

export const NavMenu = ({ onClose }) => {
  return (
    <div className='w-96 h-96 bg-white shadow-xl top-20 right-0 fixed z-0'>
      <p onClick={onClose}>X</p>
    </div>
  );
};
