import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageHeader.css'

function HomePageHeader() {
  return (
    <>
      <div>
        <h1>Store Online</h1>
      </div>
      <div>
        <input type="search" placeholder="Pesquise algo..." />
      </div>
      <div>
        <Link>Carrinho</Link>
        <Link>Favoritos</Link>
        <Link>Compras</Link>
        <Link>Login</Link>
      </div>
    </>
  )
}

export default HomePageHeader;