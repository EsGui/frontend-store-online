import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../Context/myContext';
import './HomePageHeader.css'

function HomePageHeader() {
  const {
    dataUser,
    handleLoggout,
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
          <Link style={ styleLink }>Vendas</Link>
          <Link to="/announcement" style={ styleLink }>Anúncios</Link>
          {
            dataUser.token ? (
              <>
                <Link to="/userlogged" style={ styleLink }>{ dataUser.firstName }</Link>
                <Link onClick={ handleLoggout } to="/" style={ styleLink }>Sair</Link>
              </>
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