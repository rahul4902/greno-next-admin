import axios from 'axios';
import { API_URL } from 'utils/constant';
import { deleteCookie, getCookie } from 'cookies-next';
import { logout } from '../redux/authSlice';
import { store } from '../redux/store/store'; 
import { toast } from 'react-toastify';
// Create Axios instance
const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL || API_URL, 
});

// Add a request interceptor to include the token
apiClient.interceptors.request.use(
  (config) => {
    let userToken = getCookie('auth-token')
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`; 
    }
    return config;
  },
  (error) => Promise.reject(error) // Handle request errors
);

// Add a response interceptor (optional, for global response/error handling)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
        toast.error(error.response?.message)
        // store.dispatch(logout());
    //   console.error('Unauthorized! Redirecting to login...');
      deleteCookie('auth-token');
      // window.location.href = '/'; 
    }
    return Promise.reject(error);
  }
);

export default apiClient;
