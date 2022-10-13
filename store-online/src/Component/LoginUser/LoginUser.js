import React, { useContext } from 'react';
import myContext from '../../Context/myContext';
import './LoginUser.css'

function LoginUser() {
  const {
    handleSetEmailLogin,
    handleSetPasswordLogin,
    handleButtonLoginUser,
  } = useContext(myContext);

  return (
    <>
      <div className="ContainerLoginPage">
        <div className="UserLoginPage">
            <input onChange={ handleSetEmailLogin } type="email" placeholder="Digite seu email" />
            <input onChange={ handleSetPasswordLogin } type="password" placeholder="Digite sua senha" />
            <button onClick={ handleButtonLoginUser } type="button">Entrar</button>
        </div>
      </div>
    </>
  )
}

export default LoginUser;
