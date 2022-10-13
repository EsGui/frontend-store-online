import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageHeader.css'

function HomePageHeader() {
  return (
    <>
      <div className="TitleHomePageHeader">
        <h1>Store Online</h1>
      </div>
      <div className="SearchHomePageHeader">
        <input type="search" placeholder="Pesquise algo..." />
      </div>
      <div className="MenuHomePageHeader">
        <Link>Carrinho</Link>
        <Link>Favoritos</Link>
        <Link>Compras</Link>
        <Link>Login</Link>
      </div>
    </>
  )
}

export default HomePageHeader;