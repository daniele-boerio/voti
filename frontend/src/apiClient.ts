import axios from 'axios';

const apiClient = axios.create({
  baseURL: '', // vuoto: così usa lo stesso host del FE
  withCredentials: true,
});

export default apiClient;
