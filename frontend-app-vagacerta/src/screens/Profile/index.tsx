import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import {
    Wrapper,
    Container,
    Header,
    HeaderButtonContainer,
    ButtonIcon,
    ButtonText,
    ContentContainer,
    LogoutButtonContainer,
} from '../Profile/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input'
import { Button } from '../../components/Button';

import api from '../../services/api'
import { Alert } from 'react-native';
import { useAuth } from '../../contexts/Auth';


export default function Profile({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [id, setId] = useState('')
    const { user, logout } = useAuth()

    useEffect(() => {
        if(user) {
            setNome(user.nome)
            setEmail(user.email)
            setSenha(user.senha)
            setId(user.id)
        }
    }, [user]);

    const handleProfile = async () => {
        try {
            await api.put(`api/usuarios/${user.id}`, {
                nome,
                email,
                senha
            })
            Alert.alert('Sucesso', 'Usuário atualizado com sucesso')
        } catch (error) {
            Alert.alert('Error: Usuario não pode ser alterado', error.message)
        }
    }

    const handleLogout = () => {
        logout();
        navigation.replace('Login');
    };

    return (
        <Wrapper>
            <Header>
                <HeaderButtonContainer onPress={() => navigation.goBack()}>
                    <ButtonIcon>
                        <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
                    </ButtonIcon>
                    <ButtonText>
                        Voltar
                    </ButtonText>
                </HeaderButtonContainer>
                <Logo />
            </Header>

            <Container>
                <ContentContainer>
                    <Input label='Nome'
                        placeholder='digite seu nome'
                        value={nome}
                        onChangeText={text => setNome(text)}
                        />
                    <Input label='E-mail'
                        placeholder='digite seu e-mail'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        />
                    <Input label='Senha'
                        placeholder='digite sua senha'
                        value={senha}
                        onChangeText={text => setSenha(text)}
                    />
                </ContentContainer>

                <Button
                    title="Salvar informações"
                    noSpacing={true}
                    variant='primary'
                    onPress={handleProfile}
                />

                <LogoutButtonContainer>
                    <Button
                        title="Logout"
                        noSpacing={true}
                        variant='secondary'
                        onPress={handleLogout}
                    />
                </LogoutButtonContainer>
            </Container>
        </Wrapper>
    );
}
