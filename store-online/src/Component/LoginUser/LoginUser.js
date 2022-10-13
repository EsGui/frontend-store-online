import React from 'react';
import './LoginUser.css'

function LoginUser() {
  return (
    <>
      <div className="ContainerLoginPage">
        <div className="UserLoginPage">
            <input type="email" placeholder="Digite seu email" />
            <input type="password" placeholder="Digite sua senha" />
        </div>
      </div>
    </>
  )
}

export default LoginUser;
