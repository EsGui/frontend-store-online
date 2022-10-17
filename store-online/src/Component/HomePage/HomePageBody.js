import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Context/myContext';
import './HomePageBody.css'

function HomePageBody() {
  const {
    productUser,
    handleButtonAddProductFavorite,
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
                <button id={ id } onClick={ handleButtonAddProductFavorite } type="button">Favoritar</button>
                <button type="button">Adicionar ao carrinho</button>
              </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default HomePageBody;
