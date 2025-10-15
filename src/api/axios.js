import axios from "axios";


const apiService  = axios.create({
    baseURL: 'https://api-e-commerce.tenzorsoft.uz'
})

apiService.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiService;

