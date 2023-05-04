import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com/',
    timeout: 6000,
});
