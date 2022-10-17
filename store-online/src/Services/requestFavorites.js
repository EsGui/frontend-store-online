const requestFavorites = {
  createFavorite: async (nameProduct, price, imageProduct, userId, productId) => {
    const url = 'http://localhost:3000/createfavorite';
    const request = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nameProduct, price, imageProduct, userId, productId }),
    });
    const response = await request.json();
    return response;
  },
  
  deleteFavorite: async (id) => {
    const url = `http://localhost:3000/deletefavorite/${ id }`;
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
  }
}
  
  export default requestFavorites