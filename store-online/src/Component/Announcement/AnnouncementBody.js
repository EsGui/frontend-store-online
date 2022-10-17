import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Context/myContext';
import './AnnouncementBody.css';

function AnnouncementBody() {
  const {
    dataUser,
    handleButtonDeleteRegisterProduct
  } = useContext(myContext);

  const styleLink = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <>
    <div className="TitleProductAnnouncement">
      <h1>Anúncios</h1>
    </div>
      <div className="ContainerProductAnnouncement">
        {
          dataUser && dataUser.product && dataUser.product.map(({
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
              <button id={ id } onClick={ handleButtonDeleteRegisterProduct } type="button">Deletar</button>
            </div>
          ))
        }
      </div>
      {
        dataUser && dataUser.product && (
        <div className="DivLinkAnnounce">
          <Link to="/productannounce" style={ styleLink }>Anúnciar</Link>
        </div>
        )
      }
    </>
  )
}

export default AnnouncementBody;
