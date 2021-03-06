import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, TitleInput, InputForm } from "./styles";

export default function Orcamento() {
    const navigation = useNavigation();
    return (
        <Container>
            <TitleInput> Nome</TitleInput>
            <InputForm placeholder="Nome Completo" autoCorrect={false}></InputForm>
            <TitleInput> E-mail</TitleInput>
            <InputForm placeholder="Seu Melhor E-mail" autoCorrect={false}></InputForm>
        </Container>

    );
}
