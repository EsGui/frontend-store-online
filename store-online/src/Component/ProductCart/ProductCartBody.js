import React, { useContext } from 'react';
import myContext from '../../Context/myContext';

function ProductCartBody() {
  const {
    dataUser,
    handleButtonDeletePurchase,
  } = useContext(myContext);

  return (
    <>
      <div className="DivTitlePurchases">
        <h1>Compras</h1>
      </div>
      <div className="ContainerPurchases">
        {
          dataUser && dataUser.cartProductsUserId && dataUser.cartProductsUserId.map(({
            id,
            imageProduct,
            productName,
            price,
          }) => (
            <div className="DivPurchases">
              <img width="400px" src={ imageProduct } alt={ productName } />
              <p>{ productName }</p>
              <p>{ price }</p>
              <button type="button">Finalizar compra</button>
              <button id={ id } onClick={ handleButtonDeletePurchase } type="button">Deletar do carrinho</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ProductCartBody;