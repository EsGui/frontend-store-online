import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Context/myContext';
import './Announce.css'

function AnnouncementBody() {
  const {
    handleProductName,
    handlePrice,
    handleQuantity,
    handleSold,
    handleDescription,
    handleImageProduct,
    handleCategory,
    handleButtonRegisterProduct,
  } = useContext(myContext);

    const styleLink = {
      marginRight: '10px',
      textDecoration: 'none',
      color: 'black'
    }

  return (
    <>
      <div className="ContainerRegisterProduct">
        <input type="text" onChange={ handleProductName } placeholder="Nome do produto"/>
        <input type="text" onChange={ handlePrice } placeholder="Preço do produto"/>
        <input type="text" onChange={ handleQuantity } placeholder="Quantidade do produto"/>
        <input type="text" onChange={ handleSold } placeholder="Produtos vendidos" />
        <input type="text" placeholder="Produto novo? (Reponda com yes/no)" />
        <input type="text" onChange={ handleDescription } placeholder="Descrição do produto" />
        <input type="text" onChange={ handleImageProduct } placeholder="Imagem do produto" />
        <input type="text" onChange={ handleCategory } placeholder="Categoria do produto" />
        <Link style={ styleLink } to="/announcement" onClick={ handleButtonRegisterProduct }>Cadastrar produto</Link>
      </div>
    </>
  )
}

export default AnnouncementBody;
