import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.apiUrl,
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/api/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get('/api/users');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
