const requestProducts = {
    allProducts: async () => {
      const url = 'http://localhost:3000/products';
      const request = await fetch(url);
      const response = await request.json();
      return response;
    },
  
    deleteProduct: async (id) => {
      const url = `http://localhost:3000/productsdelete/${ id }`
      const request = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          id: JSON.stringify(id),
        } 
      });
      const response = await request.json();
      return response;
    },
  
    productSpecific: async (id) => {
      const url = `http://localhost:3000/product/${ id }`
      const request = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          id: JSON.stringify(id),
        } 
      });
      const response = await request.json();
      return response;
    },
  }
  
  export default requestProducts;