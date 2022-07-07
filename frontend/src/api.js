import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_HOST,
    timeout: 1000,
    headers: {'Accept': 'application/json'}
});

instance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;