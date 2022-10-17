import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Context/myContext';
import './HomePageBody.css'

function HomePageBody() {
  const {
    productUser,
    handleButtonAddProductFavorite,
    handleButtonPurchase,
  } = useContext(myContext);

  console.log('cheguei', productUser)

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
                <Link to={ `/productspecific/${ id }` }>
                  <img width="400px" src={ imageProduct } alt={ productName } />
                  <p>{ productName }</p>
                  <p>{ price }</p>
                  <p>{ category }</p>
                  <p>{ description }</p>
                  <p>{ sold } / { quantity }</p>
                </Link>
                <button id={ id } onClick={ handleButtonAddProductFavorite } type="button">Favoritar</button>
                <button id={ id } onClick={ handleButtonPurchase } type="button">Adicionar ao carrinho</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default HomePageBody;
