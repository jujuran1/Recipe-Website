import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://recipe-website-8afa5-default-rtdb.firebaseio.com/'
});

export default instance;