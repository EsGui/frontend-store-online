import React, { useEffect, useState } from 'react';
import requestFavorites from '../Services/requestFavorites';
import requestProducts from '../Services/requestProducts';
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
  const [productUser, setProductUser] = useState([]);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [sold, setSold] = useState('');
  const [description, setDescription] = useState('');
  const [imageProduct, setImageProduct] = useState('');
  const [category, setCategory] = useState('');

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
  const handleSetGenreRegister = ({ target }) => setGenreRegister(target.value);

  const handleProductName = ({ target }) => setProductName(target.value);
  const handlePrice = ({ target }) =>  setPrice(target.value);
  const handleQuantity = ({ target }) => setQuantity(target.value);
  const handleSold = ({ target }) => setSold(target.value);
  const handleDescription = ({ target }) => setDescription(target.value);
  const handleImageProduct = ({ target }) => setImageProduct(target.value);
  const handleCategory = ({ target }) => setCategory(target.value);

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

  const handleButtonRegisterProduct = async () => {
    const response = await requestProducts.registerProduct({
      productName,
      price,
      quantity,
      sold,
      description,
      imageProduct,
      category,
      userId: dataUser.id,
    });
    document.location.reload();
    console.log(response)
  };

  const handleButtonDeleteRegisterProduct = async ({ target }) => {
    const product = await requestProducts.deleteProduct(target.id);
    console.log(product);
    document.location.reload();
  }

  const handleButtonDeleteProductFavorite = async ({ target }) => {
    const product = await requestFavorites.deleteFavorite(target.id);
    console.log(product);
    document.location.reload();
  }

  const handleButtonAddProductFavorite = async ({ target }) => {
    console.log(target.id)
    const productFavorite = await requestProducts.productSpecific(target.id);
    console.log(productFavorite);
    const favorito = await requestFavorites.createFavorite(
      productFavorite.productName,
      productFavorite.price,
      productFavorite.imageProduct,
      dataUser.id,
      target.id,
    );

    console.log(favorito);

    window.location.reload();
  }

  const handleLoggout = () => {
    localStorage.removeItem('tokenUser');
    setTokenUser('');
  };

  useEffect(() => {
    const request = async () => {
      const User = await requestUser.dataUserLogged(localStorage.getItem('tokenUser'));
      setDataUser(User);
    }
    request();
  }, [tokenUser]);

  useEffect(() => {
    const request = async () => {
      const product = await requestProducts.allProducts();
      setProductUser(product);
    }
    request();
  }, []);

  console.log(dataUser);
  console.log('Log do produto =>', productUser);

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
    handleLoggout,
    handleProductName,
    handlePrice,
    handleQuantity,
    handleSold,
    handleDescription,
    handleImageProduct,
    handleCategory,
    handleButtonRegisterProduct,
    handleButtonDeleteRegisterProduct,
    handleButtonDeleteProductFavorite,
    handleButtonAddProductFavorite,
    dataUser,
    emailLogin,
    passwordLogin,
    productUser,
  }

  return (
    <myContext.Provider value={ objValue }>
      { children }
    </myContext.Provider>
  )
};

export default Logic