import React from 'react';

const Button = ({ children, handler }) => {
  return (
    <button
      className={`${children === 'Increment' ? 'bg-indigo-400' : 'bg-red-400'} text-white px-3 py-2 rounded shadow`}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
