import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'  //colocar endereço IP da sua maquina
});

export default api;