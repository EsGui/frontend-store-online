import React, { useContext } from 'react';
import myContext from '../../Context/myContext';
import './RegisterUser.css'

function RegisterUser() {
  const {
    handleSetNameRegister,
    handleSetLastNameRegister,
    handleSetUrlRegister,
    handleSetEmailRegister,
    handleSetPassowordRegister,
    handleSetAddressRegister,
    handleSetBirthDateRegister,
    handleSetPhoneRegister,
    handleSetCepRegister,
    handleSetStateRegister,
    handleSetCityRegister,
    handleSetGenreRegister,
    handleButtonRegisterUser,
  } = useContext(myContext)

  return (
    <>
      <div className="ContainerRegisterUser">
        <div className="DivRegisterUser">
          <input type="text" onChange={handleSetNameRegister} placeholder="Digite nome" />
          <input type="text" onChange={handleSetLastNameRegister} placeholder="Digite seu sobrenome" />
          <input type="text" onChange={handleSetUrlRegister} placeholder="url da imagem" />
          <input type="email" onChange={handleSetEmailRegister} placeholder="Digite seu email" />
          <input type="password" onChange={handleSetPassowordRegister} placeholder="Digite uma senha" />
          <input type="text" onChange={handleSetAddressRegister} placeholder="Digite seu endereço" />
          <input type="text" onChange={handleSetBirthDateRegister} placeholder="Digite sua data de nascimento" />
          <input type="text" onChange={handleSetPhoneRegister} placeholder="Digite seu número de telefone" />
          <input type="text" onChange={handleSetCepRegister} placeholder="Digite seu cep" />
          <input type="text" onChange={handleSetStateRegister} placeholder="Digite seu estado" />
          <input type="text" onChange={handleSetCityRegister} placeholder="Digite sua cidade" />
          <p>Genero</p>
          <div>
            <input type="radio" onChange={handleSetGenreRegister} name="genero" value="Masculino" />Masculino
            <input type="radio" onChange={handleSetGenreRegister} name="genero" value="Feminino" />Feminino
          </div>
          <button onClick={handleButtonRegisterUser} type="button">Cadastrar</button>
        </div>
      </div>
    </>
  )
}

export default RegisterUser