import React, { useState } from 'react';
import requestUser from '../Services/requestUser';
import myContext from './myContext';

function Logic ({ children }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleSetEmailLogin = ({ target }) => setEmailLogin(target.value);
  const handleSetPasswordLogin = ({ target }) => setPasswordLogin(target.value);
  const handleButtonLoginUser = async () => {
    const responseLoginUser = await requestUser.userLogin(emailLogin, passwordLogin);
    window.alert(responseLoginUser.message);
  }

  const objValue = {
    handleSetEmailLogin,
    handleSetPasswordLogin,
    handleButtonLoginUser,
  }

  return (
    <myContext.Provider value={ objValue }>
      { children }
    </myContext.Provider>
  )
};

export default Logic