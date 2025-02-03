import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL, // Your backend URL
  withCredentials: true, // Keep credentials if needed
});

// Add a request interceptor to set the Authorization header
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token"); // Retrieve the token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
