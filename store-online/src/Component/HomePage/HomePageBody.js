import React, { useContext } from 'react';
import myContext from '../../Context/myContext';
import './HomePageBody.css'

function HomePageBody() {
  const {
    productUser,
    handleButtonAddProductFavorite
  } = useContext(myContext);

  return (
    <>
      <div className="ContainerProductAnnouncement">
        {
          productUser && productUser.map(({
            id,
            category,
            description,
            imageProduct,
            price,
            productName,
            quantity,
            sold,
          }) => (
            <div className="DivProductAnnouncement">
              <img width="400px" src={ imageProduct } alt={ productName } />
              <p>{ productName }</p>
              <p>{ price }</p>
              <p>{ category }</p>
              <p>{ description }</p>
              <p>{ sold } / { quantity }</p>
              <button id={ id } onClick={ handleButtonAddProductFavorite } type="button">Favoritar</button>
              <button type="button">Adicionar ao carrinho</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default HomePageBody;
