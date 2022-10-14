import React, { useContext } from 'react';
import myContext from '../../Context/myContext';

function UserLoggedBody() {
  const {
    dataUser
  } = useContext(myContext);

  console.log(dataUser);

  return (
    <>
      <h1>Testando...</h1>
    </>
  )
}

export default UserLoggedBody;
