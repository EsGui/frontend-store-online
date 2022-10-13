const requestUser = {
  userLogin: async (email, password) => {
    const url = 'http://localhost:3000/login'
    const request = await fetch(url, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await request.json();
    return response;
  }
}

export default requestUser;
