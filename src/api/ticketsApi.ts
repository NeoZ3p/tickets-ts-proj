import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru'
})