import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageHeader.css'

function HomePageHeader() {
  const styleLink = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <>
      <div className="ContainerHomePageHeader">
        <div className="TitleHomePageHeader">
            <h1>Store Online</h1>
        </div>
        <div className="SearchHomePageHeader">
            <input type="search" placeholder="Pesquise algo..." />
        </div>
        <div className="MenuHomePageHeader">
            <Link style={ styleLink }>Carrinho</Link>
            <Link style={ styleLink }>Favoritos</Link>
            <Link style={ styleLink }>Compras</Link>
            <Link to="/login" style={ styleLink }>Login</Link>
        </div>
      </div>
    </>
  )
}

export default HomePageHeader;