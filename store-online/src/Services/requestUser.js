const requestUser = {
  userLogin: async (email, password) => {
    const url = 'http://localhost:3001/login'
    const request = await fetch(url, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await request.json();
    return response;
  },

  registerUser: async (objectUserRegister) => {
    const url = 'http://localhost:3001/register';
    const request = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objectUserRegister),
    });
    const response = request.json();
    return response;
  }
}

export default requestUser;
