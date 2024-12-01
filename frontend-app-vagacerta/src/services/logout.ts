import axios from 'axios';

export const logoutService = async (): Promise<void> => {
  try {
    const response = await axios.post('http://192.168.0.15:3000');
    console.log(response.data.message);
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw new Error('Falha ao desconectar. Tente novamente.');
  }
};