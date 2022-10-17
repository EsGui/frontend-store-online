import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Context/myContext';

function AnnouncementBody() {
  const {
    productUser,
    handleButtonDeleteRegisterProduct
  } = useContext(myContext);

  const styleLink = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <>
      <div>
        <div>
          {
            productUser.map(({
              id,
              category,
              description,
              imageProduct,
              price,
              productName,
              quantity,
              sold,
            }) => (
              <div>
                <img src={ imageProduct } alt={ productName } />
                <p>{ productName }</p>
                <p>{ price }</p>
                <p>{ category }</p>
                <p>{ description }</p>
                <p>{ sold } / { quantity }</p>
                <button id={ id } onClick={ handleButtonDeleteRegisterProduct } type="button">Deletar</button>
              </div>
            ))
          }
        </div>
        <Link to="/productannounce" style={ styleLink }>Anúnciar</Link>
      </div>
    </>
  )
}

export default AnnouncementBody;
