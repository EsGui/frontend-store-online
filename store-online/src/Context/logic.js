import React, { useEffect, useState } from 'react';
import requestUser from '../Services/requestUser';
import myContext from './myContext';

function Logic ({ children }) {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [nameRegister, setNameRegister] = useState('');
  const [lastName, setLastName] = useState('');
  const [urlRegister, setUrlRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passowordRegister, setPasswordRegister] = useState('');
  const [addressRegister, setAddressRegister] = useState('');
  const [birthDateRegister, setBirthDateRegiser] = useState('');
  const [phoneRegister, setPhoneRegister] = useState('');
  const [cepRegister, setCepRegister] = useState('');
  const [stateRegister, setStateRegister] = useState('');
  const [cityRegister, setCityRegister] = useState('');
  const [genreRegister, setGenreRegister] = useState('');
  const [dataUser, setDataUser] = useState('');
  const [tokenUser, setTokenUser] = useState('');

  const handleSetNameRegister = ({ target }) => setNameRegister(target.value);
  const handleSetLastNameRegister = ({ target }) => setLastName(target.value);
  const handleSetUrlRegister = ({ target }) => setUrlRegister(target.value);
  const handleSetEmailRegister = ({ target }) => setEmailRegister(target.value);
  const handleSetPassowordRegister = ({ target }) => setPasswordRegister(target.value);
  const handleSetAddressRegister = ({ target }) => setAddressRegister(target.value);
  const handleSetBirthDateRegister = ({ target }) => setBirthDateRegiser(target.value);
  const handleSetPhoneRegister = ({ target }) => setPhoneRegister(target.value);
  const handleSetCepRegister = ({ target }) => setCepRegister(target.value);
  const handleSetStateRegister = ({ target }) => setStateRegister(target.value);
  const handleSetCityRegister = ({ target }) => setCityRegister(target.value);
  const handleSetGenreRegister = ({ target }) => setGenreRegister(target.value)

  const handleSetEmailLogin = ({ target }) => setEmailLogin(target.value);
  const handleSetPasswordLogin = ({ target }) => setPasswordLogin(target.value);

  const handleButtonLoginUser = async () => {
    const responseLoginUser = await requestUser.userLogin(emailLogin, passwordLogin);
    if (responseLoginUser.message) {
      window.alert(responseLoginUser.message);
    }
    if (responseLoginUser.token) {
      localStorage.setItem('tokenUser', JSON.stringify(responseLoginUser.token));
    }
    setTokenUser(localStorage.getItem('tokenUser'));
  };

  useEffect(() => {
    const request = async () => {
      const User = await requestUser.dataUserLogged(localStorage.getItem('tokenUser'));
      setDataUser(User);
    }
    request();
  }, [tokenUser]);

  const handleButtonRegisterUser = async () => {
    const objectUserRegister = {
      firstName: nameRegister,
      lastName: lastName,
      imageUser: urlRegister,
      email: emailRegister,
      password: passowordRegister,
      address: addressRegister,
      birthDate: birthDateRegister,
      phone: phoneRegister,
      cep: cepRegister,
      genre: genreRegister,
      state: stateRegister,
      city: cityRegister,
    }
    const responseRegisterUser = await requestUser.registerUser(objectUserRegister);
    window.alert(responseRegisterUser.message);
  }

  const objValue = {
    handleSetEmailLogin,
    handleSetPasswordLogin,
    handleButtonRegisterUser,
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
    setDataUser,
    handleButtonLoginUser,
    dataUser,
    emailLogin,
    passwordLogin,
  }

  return (
    <myContext.Provider value={ objValue }>
      { children }
    </myContext.Provider>
  )
};

export default Logic