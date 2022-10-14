import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import myContext from '../../Context/myContext';
import requestUser from '../../Services/requestUser';
import './LoginUser.css'

function LoginUser() {
  const {
    handleSetEmailLogin,
    handleSetPasswordLogin,
    dataUser,
    setDataUser,
    emailLogin,
    passwordLogin,
  } = useContext(myContext);

  const history = useHistory()

  const handleButtonLoginUser = async () => {
    const responseLoginUser = await requestUser.userLogin(emailLogin, passwordLogin);
    if (responseLoginUser.message) {
      window.alert(responseLoginUser.message);
    }
    console.log(responseLoginUser);
    if (responseLoginUser.token) {
      console.log(dataUser);
      localStorage.setItem('tokenUser', JSON.stringify(responseLoginUser.token));
    }
    if (localStorage.getItem('tokenUser')) {
      const User = await requestUser.dataUserLogged(localStorage.getItem('tokenUser'));
      setDataUser(User);
      history.push('/userlogged')
    }
  };

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
