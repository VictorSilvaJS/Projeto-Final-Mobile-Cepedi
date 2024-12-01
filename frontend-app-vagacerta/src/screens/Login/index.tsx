import { Image } from 'react-native'
import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wrapper, Container, Form, TextContainer, TextBlack, TextLink, TextLinkContainer } from './styles';
import { useAuth } from '../../contexts/Auth';

import BGTop from '../../assets/BGTop.png'
import Logo from '../../components/Logo'
import Input from '../../components/Input'
import { Button } from '../../components/Button'

import api from '../../services/api'

export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      const response = await api.get('api/usuarios')
      const users = response.data.usuarios;
      console.log(users)

      const user = users.find(u => u.email === email && u.senha === senha);
      if (user) {
        console.log('Login successful', `Welcome, ${user.nome}!`)
        const jsonValue = JSON.stringify(user);
        await AsyncStorage.setItem('user', jsonValue);
        login(user)
        navigation.navigate('Auth', { screen: 'Home' })
        // Navegue para a próxima tela ou faça outras ações necessárias
        // navigation.navigate('NextScreen');
      } else {
        console.log('Login failed', 'Email or password is incorrect');
      }
    } catch (error) {
      console.log('Login failed', 'An error occurred during login');
      console.error('Error Status: ', error.status)
      console.error('Error message: ', error.message)
    }
  };

  return (
    <Wrapper>
      <Image source={BGTop} />

      <Container>
        <Form>
          <Logo />
          <Input
            label='E-mail'
            placeholder='digite seu e-mail'
            value={email}
            onChangeText={setEmail} />
          <Input
            label='Senha'
            placeholder='digite sua senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true} />
          <Button
            title="Entrar"
            noSpacing={true}
            variant='primary'
            onPress={handleLogin}
          />
          <TextContainer>
            <TextBlack>Não tem uma conta?</TextBlack>
            <TextLinkContainer onPress={() => navigation.navigate('FormScreen')}>
              <TextLink>
                Crie agora mesmo.
              </TextLink>
            </TextLinkContainer>
          </TextContainer>
        </Form>
      </Container>

    </Wrapper>
  );
}
