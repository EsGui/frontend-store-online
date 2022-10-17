import React, { useEffect, useState } from 'react';
import requestProducts from '../../Services/requestProducts';

function ProductSpecificBody({ value }) {
  const [productSpecific, setProductSpecific] = useState({});
  const { id } = value.match.params;

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
      <div>
        {
          <>
            {
              <>
                <h1>{ productSpecific.productName }</h1>
                <img width="400px" src={ productSpecific.imageProduct } alt="Imagem do produto"/>
                <p> R$ { productSpecific.price }</p>
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
              </>
            }
          </>
        }
      </div>
    </>
  )
}

export default ProductSpecificBody;
