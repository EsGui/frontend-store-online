import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../Context/myContext';
import requestProducts from '../../Services/requestProducts';
import './ProductSpecificBody.css';

function ProductSpecificBody({ value }) {
  const [productSpecific, setProductSpecific] = useState({});
  const { id } = value.match.params;

  localStorage.setItem('idProduct', JSON.stringify(id));

  const {
    handleCommentUser,
    handleButtonComment,
  } = useContext(myContext)

  console.log(value)

  console.log(productSpecific)

  useEffect(() => {
    const request = async () => {
      const product = await requestProducts.productSpecific(id);
      setProductSpecific(product);
    };
    request();
  }, []);

  return (
    <>
      <div className="StyleProductSpecific">
        {
          <div>
            <div className="StyleProductSpecificUser">
              <div className="StyleProductSpecificProduct">
                <h1>{ productSpecific.productName }</h1>
                <img width="400px" src={ productSpecific.imageProduct } alt="Imagem do produto"/>
                <p> R$ { productSpecific.price }</p>
              </div>
            {
                productSpecific && productSpecific.user &&
                productSpecific.user.map(({
                    firstName,
                    lastName,
                    imageUser
                }) => (
                    <div key={ id }>
                        <h2>Vendedor</h2>
                        <img width="400px" src={ imageUser } alt="Imagem do usuário"/>
                        <p>{ firstName } { lastName }</p>
                    </div>
                ))
            }
            </div>
            <></>
            <div className="TitleCommentUser">
              <h2>Comentarios</h2>
            </div>
            {
              productSpecific && productSpecific.commentIdUser &&
              productSpecific.commentIdUser.map(({ comentarios, userComment }) => (
                <div className="StyleCommentUser">
                  <p>{ comentarios.commentProduct }</p>
                  <img width="300px" src={ userComment.imageUser } alt={ userComment.firstName } />
                </div>
              ))
            }
            <div className="ContainerCommentUserProductSpecific">
              <textarea className="StyleCommentUserProductSpecific" onChange={ handleCommentUser } type="text" />
            
            <button onClick={ handleButtonComment } type="button">Enviar comentário</button>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default ProductSpecificBody;
