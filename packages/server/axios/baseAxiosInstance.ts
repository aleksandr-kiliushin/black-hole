import axios from 'axios';

const BASE_URL = 'https://ya-praktikum.tech/api/v2/';

export const baseAxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
