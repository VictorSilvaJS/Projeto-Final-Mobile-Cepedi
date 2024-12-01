import React, { useContext, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
    Wrapper,
    Container,
    Header,
    HeaderButtonContainer,
    ButtonIcon,
    ButtonText,
    ContentContainer,
} from '../Profile/styles';
import Logo from '../../components/Logo';
import theme from '../../theme';
import Input from '../../components/Input'
import { Button } from '../../components/Button';

import { useAuth } from '../../contexts/Auth';
import api from '../../services/api'
import { Alert } from 'react-native';

export default function Profile({ navigation }) {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { user, logout } = useAuth()

    const handleProfile = async () => {
        try {
            const response = await api.get('api/usuarios/:id')
            const us = response.data
            console.log(us.email)
            if (us.id === user.id) {
                setId(us.id)
                setNome(us.nome)
                setEmail(us.email)
                setSenha(us.senha)
                console.log('busca endereço')
                api.put(`api/usuarios/${id}`, {
                    nome,
                    email,
                    senha
                })
                console.log('traz endereço')
            } else {
                Alert.alert('Usuario não autorizado')
                logout()
                navigation.replace('Login')
            }
        } catch (error) {
            console.log(error)
        }
    }

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
                        onChangeText={setNome}
                    />
                    <Input label='E-mail'
                        placeholder='digite seu e-mail'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input label='Senha'
                        placeholder='digite sua senha'
                        value={senha}
                        onChangeText={setSenha}
                    />
                </ContentContainer>

                <Button
                    title="Salvar informações"
                    noSpacing={true}
                    variant='primary'
                    onPress={handleProfile}
                />
            </Container>
        </Wrapper>
    );
}
