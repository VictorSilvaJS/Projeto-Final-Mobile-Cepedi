import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.18.6:3000'  //colocar endereço IP da sua maquina
});

export default api;