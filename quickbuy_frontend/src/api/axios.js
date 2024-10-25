import axios from 'axios';

// This axios instance will be used to make API calls across the frontend components.
const instance = axios.create({
    baseURL: 'http://localhost:8080/'
})

export default instance;



