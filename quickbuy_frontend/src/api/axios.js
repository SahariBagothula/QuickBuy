import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        console.log('Request Config:', config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use((response) => {
    console.log('Response:', response);
    return response;
},
    (error) => {
        if (error.response && error.response.status === 401) {
            alert("Session expired. Please log in again. ")
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;



