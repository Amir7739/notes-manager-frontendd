import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

console.log("api baase", API_BASE_URL);

export const loginUser = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
  return response.data;
};
