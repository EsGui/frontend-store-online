import React, { useContext } from 'react';
import myContext from '../../Context/myContext';
import './UserLoggedBody.css'

function UserLoggedBody() {
  const {
    dataUser
  } = useContext(myContext);

  console.log(dataUser);

  return (
    <>
      <div className="ContainerUserLoggedBody">
        <div className="TitleUserLoggedBody">
          <h1>Perfil</h1>
        </div>
        <div className="PhotographUserLoggedBody">
          <img src={ dataUser.imageUser } alt={ dataUser.firstName } />
          <p>{ dataUser.firstName } { dataUser.lastName }</p>
        </div>
        <div className="ContainerDataUserLoggedBody">
          <div>
            <p>Usuário:</p>
            <p>{ dataUser.firstName } { dataUser.lastName }</p>
          </div>
          <div>
            <p>Email:</p>
            <p>{ dataUser.email }</p>
          </div>
          <div>
            <p>Endereço:</p>
            <p>{ dataUser.address }</p>
          </div>
          <div>
            <p>Telefone:</p>
            <p>{ dataUser.phone }</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserLoggedBody;
