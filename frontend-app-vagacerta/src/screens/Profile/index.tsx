import React, { useState } from 'react';
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

import api from '../../services/api'

export default function Profile({ navigation }) {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    const handleProfile = async () => {
        try {
            const response = await api.get('api/usuarios/:id')
            const user = response.data
            if (user) {
                setId(user.id)
                setNome(user.nome)
                setEmail(user.email)
                setSenha(user.senha)
                api.put(`http://localhost:3000/api/usuarios/${id}`,{
                    nome,
                    email,
                    senha
                })
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
