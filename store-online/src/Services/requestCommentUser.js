const requestComments = {
    commentUser: async (commentProduct, userId, productId) => {
      const url = 'http://localhost:3001/commentuser';
      const request = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentProduct, userId, productId }),
      });
  
      const response = await request.json();
      return response;
    },
  };
  
  export default requestComments;