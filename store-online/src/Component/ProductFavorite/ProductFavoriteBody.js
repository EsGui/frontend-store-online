import React, { useContext } from 'react';
import myContext from '../../Context/myContext';
import './ProductFavoriteBody.css'

function ProductFavoriteBody() {
  const {
    dataUser,
    handleButtonDeleteProductFavorite,
  } = useContext(myContext);

  return (
    <>
      <div className="TitleProductFavorite">
        <h1>Favoritos</h1>
      </div>
      <div className="ContainerProductFavorite">
        {
          dataUser && dataUser.productFavorite && dataUser.productFavorite.map(({
            id,
            category,
            imageProduct,
            price,
            nameProduct,
          }) => (
            <div className="DivProductFavorite">
              <img width="400px" src={ imageProduct } alt={ nameProduct } />
              <p>{ nameProduct }</p>
              <p>{ price }</p>
              <p>{ category }</p>
              <button id={ id } onClick={ handleButtonDeleteProductFavorite } type="button">Deletar</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ProductFavoriteBody;
