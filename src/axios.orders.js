import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-3fea0-default-rtdb.firebaseio.com/'
});

export default instance;