import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
            <img src="https://www.glizzy.nl/wp-content/themes/editium/assets/front/img/def_gravatar.png" alt="Gravatar" />
            <input onChange={ handleSetEmailLogin } type="email" placeholder="Digite seu email" />
            <input onChange={ handleSetPasswordLogin } type="password" placeholder="Digite sua senha" />
            <button onClick={ handleButtonLoginUser } type="button">Entrar</button>
            <Link>Esqueceu sua senha?</Link>
            <Link to="/register">Cadastre-se</Link>
        </div>
      </div>
    </>
  )
}

export default LoginUser;
