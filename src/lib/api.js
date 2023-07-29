import config from './config';

export async function login(username, password) {
    try {
      const response = await fetch(`${config.apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
}  

export async function getUsers() {
  const response = await fetch(`${config.apiUrl}/users`);
  const data = await response.json();
  return data;
}

export async function getUserById(userId) {
  const response = await fetch(`${config.apiUrl}/users/${userId}`);
  const data = await response.json();
  return data;
}
