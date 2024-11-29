import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.15:3000'  //colocar endereço IP da sua maquina
});

export default api;