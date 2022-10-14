import React, { useContext } from 'react';
import myContext from '../../Context/myContext';

function UserLoggedBody() {
  const {
    dataUser
  } = useContext(myContext);

  console.log(dataUser);

  return (
    <>
      <h1>{ dataUser.firstName } { dataUser.lastName }</h1>
    </>
  )
}

export default UserLoggedBody;
