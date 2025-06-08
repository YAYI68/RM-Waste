import axios from 'axios';

const BASE_API_URL: string = "https://app.wewantwaste.co.uk/api/";

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

