import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Context/myContext';
import './HomePageHeader.css'

function HomePageHeader() {
  const {
    dataUser,
  } = useContext(myContext);

  const styleLink = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'black'
  }

  const styleLinkHeader = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'black',
    fontSize: '40px'
  }

  return (
    <>
      <div className="ContainerHomePageHeader">
        <div className="TitleHomePageHeader">
            <Link to="/" style={ styleLinkHeader }>Store Online</Link>
        </div>
        <div className="SearchHomePageHeader">
            <input type="search" placeholder="Pesquise algo..." />
        </div>
        <div className="MenuHomePageHeader">
          <Link style={ styleLink }>Carrinho</Link>
          <Link style={ styleLink }>Favoritos</Link>
          <Link style={ styleLink }>Compras</Link>
          {
            dataUser.token ? (
              <p>{ dataUser.firstName } { dataUser.lastName }</p>
            ) : (
              <Link to="/login" style={ styleLink }>Login</Link>    
            )
          }
        </div>
      </div>
    </>
  )
}

export default HomePageHeader;