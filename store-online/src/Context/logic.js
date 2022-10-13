import React from 'react';
import myContext from './myContext';

function Logic ({ children }) {
  const objValue = {

  }

  return (
    <myContext.Provider value={ objValue }>
      { children }
    </myContext.Provider>
  )
};

export default Logic