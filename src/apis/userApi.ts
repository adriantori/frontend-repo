import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Dummy REST API

export const fetchUserData = async () => {
  const response = await axios.get(`${API_BASE_URL}/users/1`);
  return response.data;
};

export const updateUserData = async (data: any) => {
  const response = await axios.put(`${API_BASE_URL}/users/1`, data);
  return response.data;
};
