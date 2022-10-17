const requestCart = {
  productCart: async (
    imageProduct,
    nameProduct,
    price,
    userId,
    productId,
    sellerId
  ) => {
    const url = 'http://localhost:3001/createcart';
    const request = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
          imageProduct,
          nameProduct,
          price,
          userId,
          productId,
          sellerId,
      }),
    });
  
    const response = await request.json();
    return response;
  },

  productCartSpecific: async (id) => {
      const url = `http://localhost:3001/product/${ id }`;
      const request = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          id: JSON.stringify({ id }),
        } 
      });
    
      const response = await request.json();
      return response;
  },

  ProductCartDeleted: async (id) => {
    const url = `http://localhost:3001/listcartsdeleted/${ id }`;
    const request = await fetch(url, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          id: JSON.stringify({ id }),
        } 
      });
    
    const response = await request.json();
    return response;
  }
};
  
  export default requestCart;